// const regValidate = require('../utilities/account-validation')
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")

// Display Registration view
router.get("/register", accountController.buildRegister)

// Display Login view
router.get("/login", accountController.buildLogin)

module.exports = router
