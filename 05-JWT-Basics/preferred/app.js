require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json()); 
app.use(express.static("./public")); 

app.use("/api/v1", authRoutes);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
