// var mongoose = require('mongoose');
// var users = require('../controllers/users.js');
var products = require('../controllers/products.js');
var declines = require('../controllers/declines.js');
// var orders = require('../controllers/orders.js');
module.exports = function(app) {

	app

//User
	// Index
	.get('/users', function(request, response) {users.index(request, response) })
	// New
	.get('/users/new', function(request, response) {users.create(request, response) })
	// Show
	.get('/users/:id', function(request, response) {users.show(request, response) })
	// Edit
	.get('/users/:id/edit', function(request, response) {users.edit(request, response) })
	// Create
	.post('/users', function(request, response) {users.create(request, response) })
	// Destroy
	.delete('/users/:id', function(request, response) {users.destroy(request, response) })
	// Update
	.patch('/users/:id', function(request, response) {users.update(request, response) })
//Product
	// Index
	.get('/products', function(request, response) {products.index(request, response) })
	// New
	.get('/products/new', function(request, response) {products.create(request, response) })
	// Show
	.get('/products/:id', function(request, response) {products.show(request, response) })
	// Edit
	.get('/products/:id/edit', function(request, response) {products.edit(request, response) })
	// Create
	.post('/products', function(request, response) {products.create(request, response) })
	// Destroy
	.delete('/products/:id', function(request, response) {products.destroy(request, response) })
	// Update
	.patch('/products/:id', function(request, response) {products.update(request, response) })
//Declines
	// Index
	.get('/declines', function(request, response) {declines.index(request, response) })
	// New
	.get('/declines/new', function(request, response) {declines.create(request, response) })
	// Show
	.get('/declines/:id', function(request, response) {declines.show(request, response) })
	// Edit
	.get('/declines/:id/edit', function(request, response) {declines.edit(request, response) })
	// Create
	.post('/declines', function(request, response) {declines.create(request, response) })
	// Destroy
	.delete('/declines/:id', function(request, response) {declines.destroy(request, response) })
	// Update
	.patch('/declines/:id', function(request, response) {declines.update(request, response) })

}
