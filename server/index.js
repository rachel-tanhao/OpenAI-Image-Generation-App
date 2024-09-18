// external packages
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

// internal packages
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// A basic route to check whether the application is running
app.get("/", async (req, res) => {
    res.send("Hello from DALL-E");
  });


// API endpoints for connecting to front-end
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);


// function: startServer
const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL); // the special url for our MongoDB database
    app.listen(8080, () => console.log("Server has started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();