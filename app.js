const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// set port to 3000 if you want to connect locally
const port = "https://task-manager-tau-snowy.vercel.app/"

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
