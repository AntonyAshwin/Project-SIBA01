function setupSocket(io) {
    io.on('connection', socket => {
      console.log('🔌 New client connected:', socket.id)
  
      socket.on('join-room', roomId => {
        socket.join(roomId)
        socket.to(roomId).emit('user-joined', socket.id)
      })
  
      socket.on('split-update', (roomId, data) => {
        socket.to(roomId).emit('receive-split-update', data)
      })
  
      socket.on('disconnect', () => {
        console.log('❌ Client disconnected:', socket.id)
      })
    })
  }
  
  module.exports = { setupSocket }
  