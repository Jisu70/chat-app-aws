module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("message", (msg, userName, groupId) => {
      io.emit("message", msg, userName, groupId);
    });

    socket.on("file", (msg, userName, groupId) => {
      io.emit("file", msg, userName, groupId);
    });
  });
};
