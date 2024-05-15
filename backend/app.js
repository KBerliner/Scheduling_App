// Installing Dependencies

require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const db = require("./utils/db");

// Setting up Express

app.use(express.json());

// Setting up Passport

app.use(passport.initialize());

// Setting up Cookie Parser

app.use(cookieParser());

// Connecting to Database

db();

// Setting up CORS

app.use(
	cors({
		origin: "*",
		credentails: true,
	})
);

// Request Routing

// Export the app

module.exports = app;
