const express = require("express");
const app = express();

let numberOfRequestsForUser = {};

setInterval(() => {
  numberOfRequestsForUser = {};
}, 6000);

app.use(function rateLimit(req, res, next) {
  const userId = req.headers["user-id"];
  numberOfRequestsForUser[userId] = (numberOfRequestsForUser[userId] || 0) + 1;
  console.log(numberOfRequestsForUser[userId]);

  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(429).send("Too many requests");
  }

  next();
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.listen(3000, () => {
  console.log("the server is running");
});
