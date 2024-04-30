control express = require('xpress');
const productController = require('./controllers/productscontroller.js');

const productRoute = express.Route();
productRoute.route('/')
.get(productController.getAllProducts)
.post(productController.addProduct);


module.exports = productRouter;
