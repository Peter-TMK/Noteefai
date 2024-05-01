const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const { isLoggedIn } = require("../middleware/checkAuth");
const {
  noteValidationMiddleWare,
  updateNoteValidationMiddleware,
} = require("../utils/validators/notesValidator");

router.get("/dashboard", isLoggedIn, dashboardController.dashboard);
router.get(
  "/dashboard/item/:id",
  isLoggedIn,
  dashboardController.dashboardViewNote
);
router.put(
  "/dashboard/item/:id",
  isLoggedIn,
  updateNoteValidationMiddleware,
  dashboardController.dashboardUpdateNote
);
router.delete(
  "/dashboard/item-delete/:id",
  isLoggedIn,
  dashboardController.dashboardDeleteNote
);
router.get("/dashboard/add", isLoggedIn, dashboardController.dashboardAddNote);
router.post(
  "/dashboard/add",
  isLoggedIn,
  noteValidationMiddleWare,
  dashboardController.dashboardSubmitNote
);
router.get(
  "/dashboard/search",
  isLoggedIn,
  dashboardController.dashboardSearch
);
router.post(
  "/dashboard/search",
  isLoggedIn,
  dashboardController.dashboardSearchSubmit
);

module.exports = router;
