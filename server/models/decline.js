var mongoose = require('mongoose');

var DeclineSchema = new mongoose.Schema({
	last_name: { type: String, trim: true },
	first_name: { type: String, trim: true },
	email: { type: String, trim: true },
	message: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Decline = mongoose.model('Decline', DeclineSchema);
DeclineSchema.path('email').required(true, "Email is required");
DeclineSchema.path('first_name').required(true, "First name is required");
DeclineSchema.path('last_name').required(true, "Last name is required");
