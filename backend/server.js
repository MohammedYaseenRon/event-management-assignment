import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { Server } from "socket.io";
import http from "http"; // Correct import
import authRoute from "./routes/authRoute.js";
import eventRoute from "./routes/eventRoute.js";


dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });


//cross-orign
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],  
}));
app.use(express.json());


//DB
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    console.error("Error: MONGO_URI is undefined. Check your .env file.");
    process.exit(1);
}

mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


//Routes
app.get("/", (req,res) => {
    res.send("Server is running");
})

app.use("/auth", authRoute);
app.use("/events", eventRoute);


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));