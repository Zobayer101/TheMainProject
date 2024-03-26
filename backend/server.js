//external import
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

//intrenal import
const route = require("./server/router/routes");
const DBconnect = require("./server/database/DBconnection");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8800;
app.use(express.json({ limit: "20mb" }));
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({extended:false}));

app.use("/route", route);

//DB connection
DBconnect();
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

app.listen(PORT, () => {
  console.log(`server run http://localhost:${PORT}`);
});
