const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const morgan = require("morgan");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const bootcamps = require("./routes/bootcamps");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const NODE_ENV = process.env.NODE_ENV;
const server = app.listen(
  PORT,
  console.log(`server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps", bootcamps);
app.use(errorHandler);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error , ${err.message}`.red);
  server.close(() => {
    process.exit(1);
  });
});
