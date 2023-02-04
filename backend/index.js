import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "notes",
  // host: "mysql-109342-0.cloudclusters.net",
  // user: "admin",
  // password: "RZzPy1hd",
  // database: "notes",
});

app.get("/", (req, res) => {
  res.json("Hello in backend section");
});

app.get("/notes", (req, res) => {
  const query = "SELECT * FROM  notestable";
  db.query(query, (err, data) => {
    if (err) {
      console.log("error", err);
      return res.json(err);
    }

    return res.json(data);
  });
});

app.post("/notes", (req, res) => {
  const query = "INSERT INTO notestable(`title` , `notescol`) VALUES (?)";
  const values = [req.body.title, req.body.notescol];
  console.log("values in be", values);
  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json("Note Has been created successfully");
  });
});

app.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;
  const q = " DELETE FROM notes.notestable WHERE id = ? ";

  db.query(q, [noteId], (err, data) => {
    if (err) return res.send(err);
    return res.json("Deletd succefully");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend...");
});
