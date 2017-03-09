var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	admiral_firstname: { type: String, trim: true },
	admiral_lastname: { type: String, trim: true },
	admiral_email: { type: String, trim: true },
	admiral_phone: { type: String, trim: true },
	admiral_bidreq: { type: String, trim: true },
	
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Product = mongoose.model('Product', ProductSchema);
ProductSchema.path('admiral_email').required(true, "Email is required");
ProductSchema.path('admiral_firstname').required(true, "First name is required");
ProductSchema.path('admiral_lastname').required(true, "Last name is required");
ProductSchema.path('admiral_phone').required(true, "What's your number?");