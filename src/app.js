const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const pollingUnitRoutes = require("./routes/pollingUnit");
const lgaRoutes = require("./routes/lga");
const resultsRoutes = require("./routes/results");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/polling-unit", pollingUnitRoutes);
app.use("/lga", lgaRoutes);
app.use("/results", resultsRoutes);

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});