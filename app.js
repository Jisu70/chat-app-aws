// Dependencies 
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });
require("dotenv").config();
app.use(express.json());
app.use(cors());

// Socket IO
const socketIO = require("./sockets/socket");
// Socket IO
socketIO(io);
// Routes
const userRoute = require("./routes/users");
const chatsRoute = require("./routes/chats");
const groupRoute = require("./routes/groups");

// Database connection
const sequelize = require("./db/connect");

// Models
const User = require("./models/users");
const chats = require("./models/chats");
const Group = require("./models/group");

// Associations
User.hasMany(chats);
chats.belongsTo(User);

Group.belongsToMany(User, { through: "UserGroups" });
User.belongsToMany(Group, { through: "UserGroups" });

chats.belongsTo(Group);
Group.hasMany(chats);

app.use(userRoute);
app.use(chatsRoute);
app.use(groupRoute);

// Connection with db and listen on server
(async () => {
  try {
    await sequelize.sync();
    http.listen(process.env.PORT, () => {
      console.log(`server listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error connecting to the database:", error);
    // Handle the error appropriately (e.g., send an error response)
  }
})();

