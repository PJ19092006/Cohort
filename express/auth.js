import express from "express";
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const port = 3008;
import { z } from "zod";

const ALL_USERS = [
  {
    username: "pj@gmail.com",
    password: "123",
    name: "pj",
  },
  {
    username: "aj@gmail.com",
    password: "1283823",
    name: "aj",
  },
  {
    username: "kj@gmail.com",
    password: "123290835",
    name: "kj",
  },
];

const schema = z.array(z.number());
app.use(express.json());

app.post("/", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  console.log(response.success);
  res.send({ response });
});
app.listen(port, () => {
  console.log("server started");
});
