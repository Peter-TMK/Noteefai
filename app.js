require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const PORT = 4444 || process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files
app.use(express.static("public"));

// Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routes
app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/dashboard"));

app.get("*", (req, res) => {
  // res.status(404).send("404 Page Not Found.");
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
