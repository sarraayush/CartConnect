const express = require('express');
const router = express.Router();
const Product = require('../models/products');

const modules = require('../middleware/check-auth');

const controllers = require('../controllers/products');


// GET /api/products
router.get('/', controllers.getAllProducts);

// GET /api/products/:id              //protected
router.get('/:id', modules.authenticateUser , controllers.getProductById);

// POST /api/products
router.post('/', modules.authenticateUser, modules.checkAdminAccess, controllers.createProduct );

// PUT /api/products/:id
router.put('/:id', modules.authenticateUser, modules.checkAdminAccess , controllers.updateProductById );

// DELETE /api/products/:id
router.delete('/:id', modules.authenticateUser, modules.checkAdminAccess , controllers.deleteProductById);

module.exports = router;