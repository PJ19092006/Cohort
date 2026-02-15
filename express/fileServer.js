import express from "express";
const app = express();
const port = 3001;
import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), "fileServer");

app.get("/files", (req, res) => {
  fs.readdir(baseDir, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("error in reading directory");
    }
    res.status(200).json({ data });
  });
});

app.get("/files/:fileName", (req, res) => {
  const filePath = path.join(baseDir, req.params.fileName);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("error in reading file");
    }
    res.status(200).json({ data });
  });
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(port, () => {
  console.log("server started");
});
