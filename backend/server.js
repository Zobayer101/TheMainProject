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
const MSG = require('./server/model/Messages');

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
const Counter = {};

const userMessage = async (data) => {
  Counter[data.message.SenderID] = data.ID;
  console.log(data);
  if (data.message.text) {
    const SID = Counter[data.message.RisiverID];
    const usermsg = new MSG({
      ConversationId: data.message.ConversatoonID,
      SenderId: data.message.SenderID,
      ResiverId: data.message.RisiverID,
      messages: data.message.text,
      photo: data.message.file,
    });
    await usermsg.save(usermsg);

    if (SID) {
      const newMsg = {
        ResiverId: data.message.RisiverID,
        SenderId: data.message.SenderID,
        ConversationId: data.message.ConversatoonID,
        messages: data.message.text,
      }
      io.to(SID).emit("resive", newMsg);
    }
    console.log(Counter);
    console.log(SID);
  }
  
}
io.on('connection', (socket) => {
  console.log('connection is successful');
  socket.on('msg', userMessage)
  
  //Disconnect
  socket.on('disconnect', () => {
    Object.keys(Counter).forEach((value) => {
      if (Counter[value] == socketio.id) {
        console.log('delete');
        delete Counter[value];
      }
    })
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
