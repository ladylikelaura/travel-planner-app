const express = require("express");
const path = require("node:path");

const app = express();
// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("dist"));

app.get("/project-data", (req, res) => {
  return res.send(projectData);
});

app.post("/project-data", (req, res) => {
  const { temperature, date, user_response } = req.body;
  console.log(temperature, date, user_response);
  projectData.temperature = temperature;
  projectData.date = date;
  projectData.user_response = user_response;
  console.log(projectData);
  return res.send("ddfwn");
});

app.get("/test", function (req, res) {
  res.send("test response");
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.listen(8080, () => console.log("App listening at port "));

module.exports = app;

// Setup Server
