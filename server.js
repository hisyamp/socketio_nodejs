const { create } = require("domain");
const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));
io.on("connection", (socket) => {
  console.log("socket connected");
});
server.listen(3000);
