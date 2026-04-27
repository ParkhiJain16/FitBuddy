const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* =========================
   ✅ CORS (important for Vercel frontend)
========================= */
app.use(cors({
  origin: "*", // you can later restrict to your Vercel URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

/* =========================
   ✅ Middleware
========================= */
app.use(express.json());

/* =========================
   ✅ Routes
========================= */
app.use("/api/plans", require("./routes/planRoutes.js"));
app.use("/api/logs", require("./routes/logRoutes"));
app.use("/api/auth", require("./routes/authRoutes.js"));
app.use("/api/ai", require("./routes/aiRoutes"));

/* =========================
   ✅ Test route
========================= */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* =========================
   ✅ DB + Server start
========================= */
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("DB Connection Failed ❌", err);
    process.exit(1);
  });