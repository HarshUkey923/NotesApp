import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors())
app.use(express.json());
app.use(rateLimiter);

app.use((req, res, next) => {
    console.log(`the request method is ${req.method} and the url is ${req.url}`);
    next();
})

app.use("/api/notes", notesRoutes)
connectDB().then(() => {
app.listen(5001, () => {
    console.log("Server is running on port:", PORT);
})
});

//mongodb+srv://hukey84_db_user:<db_password>@cluster0.l0e0bwi.mongodb.net/?appName=Cluster0