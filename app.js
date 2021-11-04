const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("연결 성공");
});

app.use("/books", router.books);
app.use("/users", router.users);

app.use((req, res) => {
  res.status(404).send("Path Not Found");
});

app.listen(port, () => {
  console.log(`서버 연결 성공, port : ${port}`);
});

module.exports = app;
