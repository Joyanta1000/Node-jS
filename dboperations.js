var database = require('./database');
const sql = require('mssql');


// var query = "SELECT * FROM sample_data ORDER BY id DESC";

// database.query(query, function (error, data) {
//   response.json(data);
// });

async function getSampleData() {
  var query = "SELECT * FROM sample_data ORDER BY id DESC";
  // return query;
  // database.query(query, function (error, data) {
  //   if (error) {
  //     return error;
  //   } else {
  //     return data;
  //   }
  // });
  try {
    let  pool = await  sql.connect(database);
    let  products = await  pool.request().query("SELECT * FROM sample_data ORDER BY id DESC");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async function getOrder(productId) {
  try {
    let pool = await sql.connect(config);
    let product = await pool.request()
      .input('input_parameter', sql.Int, productId)
      .query("SELECT * from Orders where Id = @input_parameter");
    return product.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addOrder(order) {
  try {
    let pool = await sql.connect(config);
    let insertProduct = await pool.request()
      .input('Id', sql.Int, order.Id)
      .input('Title', sql.NVarChar, order.Title)
      .input('Quantity', sql.Int, order.Quantity)
      .input('Message', sql.NVarChar, order.Message)
      .input('City', sql.NVarChar, order.City)
      .execute('InsertOrders');
    return insertProduct.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getSampleData: getSampleData,
  getOrder: getOrder,
  addOrder: addOrder
}