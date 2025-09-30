// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invControllers")
const utilities = require("../utilities")

// Route to handle classification (Matches the getNav links)

router.get("/type/:classificationId", invControllers.buildByClassificationId);


/* ****************************************
 * Route to build vehicle detail view
 **************************************** */
router.get("/detail/:id", 
utilities.handleErrors(invControllers.buildDetail))

/* ****************************************
 * Error Route
 * Assignment 3, Task 3
 **************************************** */
router.get(
  "/broken",
  utilities.handleErrors(invControllers.throwError)
)

module.exports = router;

