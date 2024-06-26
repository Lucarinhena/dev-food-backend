import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes";
import path from "path";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }
  return res.status(500).json({ message: "Internal server error" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Running at the port ${process.env.PORT}`);
});
