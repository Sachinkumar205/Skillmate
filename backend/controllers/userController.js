const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const Message = require('../models/Message');

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      bio: user.bio,
      skillsOffered: user.skillsOffered,
      skillsWanted: user.skillsWanted,
      experienceLevel: user.experienceLevel,
      availability: user.availability,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.avatar = req.body.avatar || user.avatar;
    user.bio = req.body.bio || user.bio;
    user.skillsOffered = req.body.skillsOffered || user.skillsOffered;
    user.skillsWanted = req.body.skillsWanted || user.skillsWanted;
    user.experienceLevel = req.body.experienceLevel || user.experienceLevel;
    user.availability = req.body.availability || user.availability;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      avatar: updatedUser.avatar,
      bio: updatedUser.bio,
      skillsOffered: updatedUser.skillsOffered,
      skillsWanted: updatedUser.skillsWanted,
      experienceLevel: updatedUser.experienceLevel,
      availability: updatedUser.availability,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Get matched users based on skills
// @route   GET /api/users/matched
// @access  Private
const getMatchedUsers = asyncHandler(async (req, res) => {
  const currentUser = await User.findById(req.user._id);

  if (currentUser) {
    const skillsWantedByCurrentUser = currentUser.skillsWanted;
    const skillsOfferedByCurrentUser = currentUser.skillsOffered;

    const matchedUsers = await User.find({
      _id: { $ne: currentUser._id }, // Exclude current user
      $or: [
        { skillsOffered: { $in: skillsWantedByCurrentUser } }, // Users offering skills that current user wants
        { skillsWanted: { $in: skillsOfferedByCurrentUser } },   // Users wanting skills that current user offers
      ],
    }).select('-password').sort({ availability: 1 }); // Exclude password from results and sort by availability

    res.json(matchedUsers);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Get messages between two users
// @route   GET /api/users/messages/:receiverId
// @access  Private
const getMessages = asyncHandler(async (req, res) => {
  const { receiverId } = req.params;
  const senderId = req.user._id;

  const messages = await Message.find({
    $or: [
      { sender: senderId, receiver: receiverId },
      { sender: receiverId, receiver: senderId },
    ],
  }).sort('createdAt');

  res.json(messages);
});

module.exports = { getUserProfile, updateUserProfile, getMatchedUsers, getMessages };

