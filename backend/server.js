const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Message = require('./models/Message');

dotenv.config();

connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow frontend origin
    methods: ["GET", "POST"],
  },
});
const PORT = process.env.PORT || 5001;

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('SkillMate Backend API is running!');
});

// Auth Routes
app.use('/api/auth', authRoutes);
// User Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
app.use(notFound);
app.use(errorHandler);

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // Store active users and their socket IDs (for direct calling)
  const activeUsers = {};
  activeUsers[socket.id] = socket.id; // In a real app, map userId to socketId

  socket.on('callUser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit('callUser', { signal: signalData, from, name });
  });

  socket.on('answerCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  });

  socket.on('iceCandidate', ({ target, candidate }) => {
    io.to(target).emit('iceCandidate', { candidate });
  });

  socket.on('endCall', ({ to }) => {
    io.to(to).emit('callEnded');
  });

  socket.on('joinRoom', ({ senderId, receiverId }) => {
    const roomName = [senderId, receiverId].sort().join('-'); // Create a consistent room name
    socket.join(roomName);
    console.log(`User ${socket.id} joined room ${roomName}`);
  });

  socket.on('sendMessage', async ({ sender, receiver, content }) => {
    const roomName = [sender, receiver].sort().join('-');

    try {
      const message = new Message({
        sender,
        receiver,
        content,
      });
      const savedMessage = await message.save();
      io.to(roomName).emit('message', savedMessage);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

