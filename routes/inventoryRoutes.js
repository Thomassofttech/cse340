// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invControllers");

// Route to handle classification (Matches the getNav links)

router.get("/type/:classificationId", invController.buildByClassificationId);

module.exports = router;

