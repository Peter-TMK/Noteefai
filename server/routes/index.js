const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// router.get("/", (req, res) => {
//   const locals = {
//     title: "Noteefai",
//     description: "Note-taking App",
//   };
//   res.render("index", locals);
// });
router.get("/", mainController.homepage);
router.get("/about", mainController.about);

module.exports = router;
