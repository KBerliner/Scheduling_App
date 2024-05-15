// Installing Dependencies

const mongoose = require("mongoose");

// Creating a Blueprint for the "Appointment" Object

const appointmentSchema = mongoose.Schema({
	customerName: { type: String, required: true },
	customerEmail: { type: String, required: true },
	customerPhone: { type: String, required: true },
	appointmentDate: { type: Date, required: true },
	appointmentStartTime: { type: String, required: true },
	appointmentEndTime: { type: String, required: true },
	appointmentStatus: { type: String, default: "unconfirmed" },
	appointmentNotes: { type: String, required: true },
	createdAt: { type: Date, default: new Date() },
	updatedAt: { type: Date, default: new Date() },
});

// Exporting the Appointment Blueprint

module.exports = mongoose.model("Appointment", appointmentSchema);
