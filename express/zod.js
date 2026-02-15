import express from "express";
const app = express();
const port = 3008;
import { z } from "zod";

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
