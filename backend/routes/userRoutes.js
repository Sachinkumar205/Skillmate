const express = require('express');
const { getUserProfile, updateUserProfile, getMatchedUsers, getMessages } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.get('/matched', protect, getMatchedUsers);
router.get('/messages/:receiverId', protect, getMessages);

module.exports = router;

