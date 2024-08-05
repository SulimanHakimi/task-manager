const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const port = 3000;

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

// Connect to the database
connectDB(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Connection to database failed:", error);
  });
