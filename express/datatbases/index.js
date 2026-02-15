import express from "express";
const app = express();

import jwt from "jsonwebtoken";
const jwtPassword = "123456";

import mongoose from "mongoose";
import User from "./user.js";

const port = 3008;

app.use(express.json());

mongoose.connect(

);

async function userExists(username) {
  let isUser = await User.findOne({ username: username });
  return isUser;
}

// app.post("/signup", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   // if the user already exits or nah
//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesn't exist",
//     });
//   }

//   // If not then store the values with the JTW
//   var token = jwt.sign({ username: username }, jwtPassword);

//   // return the json response with tiken name and usernaem
//   return res.json({
//     token,
//     username,
//   });
// });

app.post("/signup", async (req, res) => {
  //   const username = req.body.username;
  //   const password = req.body.password;
  //   const name = req.body.name;
  let username = "PJ";

  if (userExists(username)) return res.status(400).send("User already exists");

  const user = new User({
    name: name,
    username: username,
    password: password,
  });

  user.save();

  res.status(200).json(user);
});

// app.get("/users", (req, res) => {
//   const token = req.headers.authorization;
//   let remainingUsers;
//   try {
//     let decoded = jwt.verify(token, jwtPassword);
//     let username = decoded.username;
//     remainingUsers = ALL_USERS.filter((u) => u.username != username);
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }

//   res.json({
//     remainingUsers,
//   });
// });

app.listen(port, () => {
  console.log("server started");
});
