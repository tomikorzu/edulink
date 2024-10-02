import express from "express";
import dotenv from "dotenv";
import { connection } from "./config/db.js";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.post("/signup", (req, res) => {
  const { username, email, password, fullname } = req.body;

  if (!username || !email || !password || !fullname) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const checkUserQuery = "SELECT * FROM users WHERE username = ? OR email = ?";
  connection.query(checkUserQuery, [username, email], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error checking user existence" });
    }

    if (result.length > 0) {
      return res
        .status(409)
        .json({ message: "Username or email already exists" });
    }

    const insertUserQuery =
      "INSERT INTO users (username, email, password, fullname) VALUES (?, ?, ?, ?)";

    connection.query(
      insertUserQuery,
      [username, email, password, fullname],
      (err, result) => {
        if (err) {
          console.error("Error exectuting query:", err);
          return res.status(500).json({ message: "Error registering user" });
        }
        res
          .status(201)
          .json({
            message: "User registered successfully",
            userId: result.insertId,
          });
      }
    );
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Connected to port ${PORT}`);
});
