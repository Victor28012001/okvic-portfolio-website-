const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { createServer } = require("http");
const routes = require("./routes/users");

dotenv.config();
const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", routes);

app.get('/', (req, res) => {
    res.status(200).json('Welcome, your app is working well');
  })
  

// Connect to MongoDB
mongoose
  .connect(MONGO_URI) // Removed deprecated options
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start Server
httpServer.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
