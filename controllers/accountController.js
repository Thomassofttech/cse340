const utilities = require("../utilities/")

const accountController = {}

// Build register view
accountController.buildRegister = async function(req, res){
  const nav = await utilities.getNav()
  res.render("account/register", {
    title: "Register",
    nav,
    errors: null
  })
}

// Build login view
accountController.buildLogin = async function(req, res){
  const nav = await utilities.getNav()
  res.render("account/login", {
    title: "Login",
    nav,
    errors: null
  })
}

module.exports = accountController
