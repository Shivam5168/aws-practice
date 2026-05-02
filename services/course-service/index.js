require('dotenv').config({ path: '../../.env' });

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Build MongoDB URI
const MONGO_URI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.COURSE_DB}?authSource=admin`;

// Connect DB
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Course DB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// Route
app.get('/', (req, res) => {
  res.json({
    service: "Course Service",
    status: "Running 🚀"
  });
});

// Start server
const PORT = process.env.COURSE_PORT || 3002;

app.listen(PORT, () => {
  console.log(`Course Service running on port ${PORT}`);
});