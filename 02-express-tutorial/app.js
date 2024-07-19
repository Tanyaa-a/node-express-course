console.log("Express Tutorial");

const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");

//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

// const logger = (req, res, next) => {
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear()
//   console.log(method, url, time)
//   next()
// }

// app.use(logger)

// app.get('/', logger, (req, res) => {
//   res.send('Home')
// })

// app.get('/about', logger, (req, res) => {
//   res.send('About')
// })

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
