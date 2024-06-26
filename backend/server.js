//external import
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const socketio = require("socket.io");
const http = require("http");

//intrenal import
const route = require("./server/router/routes");
const DBconnect = require("./server/database/DBconnection");


const app = express();
const server = http.createServer(app);
dotenv.config();
const PORT = process.env.PORT || 8800;
app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.urlencoded({extended:false}));

app.use("/route", route);

//DB connection
DBconnect();

const io = new socketio.Server(server, {
  cors: {
    origin: `http://localhost:5173`,
  },
});

io.on('connection', (socket) => {
  console.log('connection is successful');
  socket.emit('servers', "This is a message");
  socket.on('disconnect', () => {
    console.log('connection is fale');
  })
})

//error handeller
app.use((err, req, res, next) => {
  if (err) {
    console.log(err.message);
    res.status(409).json({ msg: err.msg });
  } else {
    console.log(`hy this is a unknown error`);
    res.status(409).json({ msg: "thsi is a unknown error" });
  }
});

server.listen(PORT, () => {
  console.log(`server run http://localhost:${PORT}`);
});
