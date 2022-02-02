const connection = require("../config/mysql");

module.exports = {
  postProduct: (data) =>
    new Promise((resolve, reject) => {
      connection.query("INSERT INTO product SET ?", data, (error) => {
        if (!error) {
          const newResult = {
            ...data,
          };
          resolve(newResult);
        } else {
          reject(new Error(`SQL : ${error.sqlMessage}`));
        }
      });
    }),
  getAllProduct: (search, sort, order, limit, offset) =>
    new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM product WHERE productName LIKE ? ORDER BY ${sort} ${order} LIMIT ? OFFSET ?`,
        [`%${search}%`, limit, offset],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(`SQL: ${error.sqlMassage}`));
          }
        }
      );
    }),
  getCountProduct: (search) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT COUNT (*) AS total FROM product WHERE productName LIKE ?",
        [`%${search}%`],
        (error, result) => {
          if (!error) {
            resolve(result[0].total);
          } else {
            reject(new Error(`SQL: ${error.sqlMassage}`));
          }
        }
      );
    }),
};
