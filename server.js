const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

const NODE_ENV = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`server running in ${NODE_ENV} mode on port ${PORT}`)
);

const bootcamps = require("./routes/bootcamps");

app.use("/api/v1/bootcamps", bootcamps);
