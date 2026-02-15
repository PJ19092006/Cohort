import express from "express";
const app = express();
import jwt from "jsonwebtoken";
const jwtPassword = "123456";
const port = 3008;
app.use(express.json());

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

function userExists(username, password) {
  let userExists = false;
  //   for (let u of ALL_USERS) {
  //     console.log(u);
  //     if (u.username == username && u.password == password) {
  //       userExists = true;
  //     }
  //   }

  ALL_USERS.find((val, indx, arr) => {
    if (val.username == username && val.password == password) {
      userExists = true;
    }
  });

  return userExists;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
    username,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  let remainingUsers;
  try {
    let decoded = jwt.verify(token, jwtPassword);
    let username = decoded.username;
    remainingUsers = ALL_USERS.filter((u) => u.username != username);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }

  res.json({
    remainingUsers,
  });
});

app.listen(port, () => {
  console.log("server started");
});
