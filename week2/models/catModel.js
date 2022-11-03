// ./models/catModel.js
"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.execute("SELECT * FROM wop_cat");
    return rows;
  } catch (e) {
    console.error("error", e.message);
  }
};
const getCat = async (catID) => {
  try {
    const [rows] = await promisePool.execute(
      `	
      SELECT cat_id, wop_cat.name, weight, owner, filename, birthdate, wop_user.name AS ownername
      FROM wop_cat INNER JOIN wop_user
      ON wop_cat.owner = wop_user.user_id
      WHERE cat_id = ?;`,
      [catID]
    );
    return rows;
  } catch (e) {
    console.error("error", e.message);
  }
};

module.exports = {
  getAllCats,
  getCat,
};
