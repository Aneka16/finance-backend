const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ Logger
const { logger } = require("./middleware/logger");
app.use(logger);

// ✅ Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/records", require("./routes/recordRoutes"));
// ❌ REMOVE THIS LINE (important)
// app.use("/api/summary", require("./routes/summaryRoutes"));

app.use("/api/insights", require("./routes/insightRoutes"));

// ✅ Root
app.get("/", (req, res) => {
  res.send("API Running...");
});

// ✅ Error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));