const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
}

/**************************
 * Trigegering a 500 server error
 * ********* */
baseController.triggerError = async function (req, res, next){
  throw new error ("Internal Server error: 500");
}

module.exports = baseController