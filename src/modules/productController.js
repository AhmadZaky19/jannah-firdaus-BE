const { v4: uuidv4 } = require("uuid");
const productModel = require("./productModel");
const helperWrapper = require("../helpers/wrapper");
// const deleteFile = require("../helpers/upload/deleteFile");

module.exports = {
  postProduct: async (req, res) => {
    try {
      const { productName, price, stock } = req.body;
      if (productName.length < 1 || price.length < 1 || stock.length < 1) {
        return helperWrapper.response(
          res,
          400,
          "All input must be filled",
          null
        );
      }
      const setData = {
        id: uuidv4(),
        productName,
        productImage: req.file ? req.file.filename : null,
        price,
        stock,
      };
      const result = await productModel.postProduct(setData);
      return helperWrapper.response(res, 200, "Success post data", result);
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },
};
