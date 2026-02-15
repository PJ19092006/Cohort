import express, { json } from "express";
import users from "./user.js";
const app = express();
const port = 3000;

function calculateSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/", (req, res) => {
  const name = users[0].name;
  const PJKidney = users[0].kidneys;
  const numOfKidneys = PJKidney.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numOfKidneys; i++) {
    numberOfHealthyKidneys++;
  }
  const numOfunhealthy = numOfKidneys - numberOfHealthyKidneys;
  res.json({
    numOfKidneys,
    numberOfHealthyKidneys,
    numOfunhealthy,
  });
});
app.post("/", (req, res) => {
  res.send("you are on the home page");
});
app.put("/", (req, res) => {
  res.send("you are on the home page");
});
app.delete("/", (req, res) => {
  res.send("you are on the home page");
});

app.get("/sum", (req, res) => {
  const n = req.query.n;
  console.log(n);
  let ans = calculateSum(n);
  res.send(ans);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
