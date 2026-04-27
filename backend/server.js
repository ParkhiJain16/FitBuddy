const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/plans", require("./routes/planRoutes.js"));
app.use("/api/logs",require("./routes/logRoutes"));
app.use("/api/auth", require("./routes/authRoutes.js"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.get("/",(req,res)=>{
    res.send("Hey There!")
})
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected");

    app.listen(PORT,()=>{
        console.log(`You can view the backend on http://localhost:${PORT}`)
    })
})
.catch(err=> {
    console.log("DB Connection Failed", err);
    process.exit(1);
});