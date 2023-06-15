const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
// Enable CORS
app.use(cors());

// connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/graph", require("./routes/api/graph"));
app.use("/api/dp", require("./routes/api/dp"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
