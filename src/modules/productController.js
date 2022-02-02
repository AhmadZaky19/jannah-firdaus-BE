const { v4: uuidv4 } = require("uuid");
const productModel = require("./productModel");
const helperWrapper = require("../helpers/wrapper");
const deleteFile = require("../helpers/upload/deleteFile");

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
  getAllProduct: async (request, response) => {
    try {
      let { search, sort, order, page, limit } = request.query;
      page = Number(page) || 1;
      limit = Number(limit) || 4;
      search = search || "";
      sort = sort || "createdAt";
      order = order || "desc";
      const offset = page * limit - limit;
      const totalData = await productModel.getCountProduct(search);
      const totalPage = Math.ceil(totalData / limit);
      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
      };
      const result = await productModel.getAllProduct(
        search,
        sort,
        order,
        limit,
        offset
      );
      if (result.length < 1) {
        return helperWrapper.response(
          response,
          200,
          "Product not found",
          result
        );
      }
      if (page > totalPage) {
        return helperWrapper.response(response, 400, "Page not found", null);
      }

      return helperWrapper.response(
        response,
        200,
        "Success get data",
        result,
        pageInfo
      );
    } catch (error) {
      return helperWrapper.response(
        response,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const checkId = await productModel.getProductById(id);
      if (checkId.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `Data by id ${id} not found !`,
          null
        );
      }
      const { productName, price, stock } = req.body;
      const setData = {
        productName,
        productImage: req.file ? req.file.filename : null,
        price,
        stock,
        updatedAt: new Date(Date.now()),
      };
      Object.keys(setData).forEach((data) => {
        if (!setData[data]) {
          delete setData[data];
        }
      });
      if (req.file && checkId[0].productImage) {
        deleteFile(`public/uploads/${checkId[0].productImage}`);
      }
      const result = await productModel.updateProduct(setData, id);
      return helperWrapper.response(res, 200, "Success update data", result);
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const checkId = await productModel.getProductById(id);
      if (checkId.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `Data by id ${id} not found !`,
          null
        );
      }
      if (checkId[0].productImage) {
        deleteFile(`public/uploads/${checkId[0].productImage}`);
      }
      const result = await productModel.deleteProduct(id);
      return helperWrapper.response(
        res,
        200,
        `Success delete data by id ${id}`,
        result
      );
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
