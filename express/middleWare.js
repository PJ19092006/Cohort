import express from "express";
import { z } from "zod";
const app = express();
const port = 3002;
let numOfReq = 0;

app.use(calculateReq, checkAuth, checkKidney);

function calculateReq(req, res, next) {
  numOfReq++;
  console.log(numOfReq);
  next();
}

function checkAuth(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username !== "pj" || password !== "pass") {
    res.status(403).send("user doesn't not exists");
  } else {
    next();
  }
}
function checkKidney(req, res, next) {
  const kidneyId = Number(req.query.kidneyId);

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).send("wrong inputs");
  } else {
    next();
  }
}

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "enter the hospital",
  });
});

app.listen(port, () => {
  console.log("server started");
});
