import express, { json } from "express";
import users from "./user.js";
const app = express();
const port = 3000;

app.use(express.json());

function calculateSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/", (req, res) => {
  const PJKidney = users[0].kidneys;
  const numOfKidneys = PJKidney.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numOfKidneys; i++) {
    if (PJKidney[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numOfunhealthy = numOfKidneys - numberOfHealthyKidneys;
  res.json({
    numOfKidneys,
    numberOfHealthyKidneys,
    numOfunhealthy,
  });
});
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "added",
  });
});
app.put("/", (req, res) => {
  for (let i = 0; i <= users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
    res.json({
      allHealthy: "done",
    });
  }
});
app.delete("/", (req, res) => {
  let newUser = users[0].kidneys.filter((k) => k.healthy);
  users[0].kidneys = newUser;
  res.json({
    msg: "done",
  });
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
