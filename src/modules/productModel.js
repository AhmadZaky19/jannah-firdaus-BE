const connection = require("../config/mysql");

module.exports = {
  postProduct: (data) =>
    new Promise((resolve, reject) => {
      connection.query("INSERT INTO product SET ?", data, (error, result) => {
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
};
