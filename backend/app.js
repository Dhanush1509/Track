import express from "express";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";
import users from "./routes/user.js";
import attendance from "./routes/attendance.js";
import DB_CONNECT from "./config/db.js";
import dotenv from "dotenv";
import path from "path";

const app = express();

dotenv.config();


DB_CONNECT();
app.use(express.json());
app.use("/api/users", users);
app.use("/api/attendance", attendance);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));