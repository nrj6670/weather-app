const path = require("path");
const hbs = require("hbs");
const express = require("express");

//setting up port
const port = process.env.PORT || 3000;

//importing geocode and forecast files
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//changes directory paths
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//const publicDirectoryPath = path.join(__dirname, "../public/index.html");

//starting express server
const app = express();

//setting up javascript file
app.use("/js", express.static(__dirname + "./../public/js"));

//handlerbar setup
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//setting up a static
//app.use(express.static(publicDirectoryPath));

//Handling routes
app.get("", (req, res) => {
  res.render("index", {
    title: "This is a home page",
    name: "Test website",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help page",
    name: "This is a help page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About us",
    name: "This is about us page",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  geocode(req.query.address, (error, data) => {
    if (error) {
      return res.send({ error });
    }

    res.send({
      location: data.location,
      body: data.body,
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found",
  });
});

app.listen(port, () => {
  console.log("The server is up and running in port " + port);
});
