const pool = require("../database/")

/* ***************************
 *  Get all classification data
 * ************************** */
async function getClassifications(){
  return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
}

<<<<<<< HEAD
/**********************************************
 * Get all inventory items and classification_name by classification_id 
 * ************************************ */

async function getInventoryByClassificationId (classification_id) {
  try{
=======


/* ***************************
 *  Get all inventory items and classification_name by classification_id
 * ************************** */
async function getInventoryByClassificationId(classification_id) {
  try {
>>>>>>> sec
    const data = await pool.query(
      `SELECT * FROM public.inventory AS i 
      JOIN public.classification AS c 
      ON i.classification_id = c.classification_id 
      WHERE i.classification_id = $1`,
      [classification_id]
    )
    return data.rows
<<<<<<< HEAD
  } catch(error){
    console.error("getClassificationById error + error")
  }
}

/****************************
 * Get inventory and classification data by inv_id
 * ***************** */
=======
  } catch (error) {
    console.error("getclassificationsbyid error " + error)
  }
}

/* ***************************
 *  Get inventory and classification data by inv_id
 *   * ************************** */
>>>>>>> sec
async function getInventoryById(invId) {
  try {
    const data = await pool.query(
      "SELECT * FROM public.inventory AS i JOIN public.classification AS c ON i.classification_id = c.classification_id WHERE i.inv_id = $1",
      [invId]
    )
    return data.rows[0]
  } catch (error) {
    console.error(error)
  }
}
<<<<<<< HEAD
module.exports = {getClassifications,
getInventoryByClassificationId,getInventoryById};
=======


module.exports = {getClassifications, getInventoryByClassificationId,getInventoryById};
>>>>>>> sec
