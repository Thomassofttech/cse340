<<<<<<< HEAD
const utilities = require("../utilities/")
=======
const utilities = require("../utilities")
>>>>>>> sec
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
<<<<<<< HEAD
  req.flash("notice", "This is a flash message.")
  res.render("index", {title: "Home", nav})
}

/**************************
 * Trigegering a 500 server error
 * ********* */
baseController.triggerError = async function (req, res, next){
  throw new error ("Internal Server error: 500");
}

=======
  res.render("index", {title: "Home", nav})
}

/* *********************************
 * Task 3 Trigger a 500 Server Error
 * ****************************** */
baseController.triggerError = async function (req, res, next) {
  throw new Error("500 Server Error")  
}


>>>>>>> sec
module.exports = baseController