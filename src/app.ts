import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Listen to post ", PORT));
