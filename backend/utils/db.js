// Installing Dependencies

require("dotenv").config();

const mongoose = require("mongoose");

// Setting Connection String (MongoDB)

const uri = process.env.MONGODB_CONNECTION_STRING;

// Connecting to Database

const run = () => {
	mongoose
		.connect(uri)
		.then(() => {
			console.log("MongoDB Connected!");
		})
		.catch((err) => {
			console.error(err);
		});
};

// Exporting the Connection

module.exports = run;
