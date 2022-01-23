const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 8000;

const app = express();

// env file
const dotenv = require("dotenv");
dotenv.config();

// Start sever
app.listen(PORT, async () => {
  console.log(`server up on po rt ${PORT}`);
});

// Conect to mongo
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
app.use(cors());

app.use(router);
