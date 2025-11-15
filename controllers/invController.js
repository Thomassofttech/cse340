// const invModel = require("../models/inventory-model")
// const utilities = require("../utilities/")

// const invCont = {}

// /* ***************************
//  *  Build inventory by classification view
//  * ************************** */
// invCont.buildByClassificationId = async function (req, res, next) {
//   const classification_id = req.params.classificationId
//   const data = await invModel.getInventoryByClassificationId(classification_id)
//   const grid = await utilities.buildClassificationGrid(data)
//   let nav = await utilities.getNav()
//   const className = data[0].classification_name
//   res.render("./inventory/classification", {
//     title: className + " vehicles",
//     nav,
//     grid,
//   })
// }

// /* ***************************
//  * Build vehicle detail view
//  *************************** */
// invController.buildByInvId = async function(req, res, next) {
//   try {
//     const invId = req.params.invId
//     const vehicleData = await invModel.getVehicleById(invId)

//     const nav = await utilities.getNav()
//     const vehicleHTML = await utilities.buildSingleVehicleDisplay(vehicleData)

//     res.render("./inventory/detail", {
//       title: `${vehicleData.inv_make} ${vehicleData.inv_model}`,
//       nav,
//       vehicleHTML,
//       errors: null
//     })
//   } catch (error) {
//     next(error)
//   }
// }


// module.exports = invCont




// const invModel = require("../models/inventory-model")
// const utilities = require("../utilities/")

// const invCont = {}

// /* ***************************
//  *  Build inventory by classification view
//  *************************** */
// invCont.buildByClassificationId = async function (req, res, next) {
//   try {
//     const classification_id = req.params.classificationId
//     const data = await invModel.getInventoryByClassificationId(classification_id)
    
//     if (data.length === 0) {
//       return res.status(404).send("No vehicles found for this classification.")
//     }

//     const grid = await utilities.buildClassificationGrid(data)
//     const nav = await utilities.getNav()
//     const className = data[0].classification_name

//     res.render("./inventory/classification", {
//       title: className + " Vehicles",
//       nav,
//       grid,
//     })
//   } catch (err) {
//     next(err)
//   }
// }

// /* ***************************
//  *  Build vehicle detail view
//  *************************** */
// invCont.buildByInvId = async function (req, res, next) {
//   try {
//     const invId = req.params.invId
//     const vehicleData = await invModel.getVehicleById(invId)

//     const nav = await utilities.getNav()
//     const vehicleHTML = await utilities.buildSingleVehicleDisplay(vehicleData)

//     res.render("./inventory/detail", {
//       title: `${vehicleData.inv_make} ${vehicleData.inv_model}`,
//       nav,
//       vehicleHTML,
//       errors: null,
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// module.exports = invCont

const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 *************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ***************************
 * Build vehicle detail view
 *************************** */
invCont.buildByInvId = async function(req, res, next) {
  try {
    const invId = req.params.invId
    // const vehicleData = await invModel.getVehicleById(invId)
const vehicleData = await invModel.getInventoryById(invId)



    const nav = await utilities.getNav()
    const vehicleHTML = utilities.buildSingleVehicleDisplay(vehicleData)

    res.render("inventory/detail", {
      title: `${vehicleData.inv_make} ${vehicleData.inv_model}`,
      nav,
      vehicleHTML,
      errors: null
    })
  } catch (error) {
    next(error)
  }
}

module.exports = invCont
