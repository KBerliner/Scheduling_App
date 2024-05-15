// Installing Dependencies

const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;

require("dotenv").config();

// Extracting Cookies from Requests

const cookieExtractor = (req) => {
	let token = null;
	if (req && req.cookies) {
		token = req.cookies["jwt"];
	}
	return token;
};

// Setting up JWT Strategy

passport.use(
	"jwt",
	new JWTStrategy(
		{
			jwtFromRequest: cookieExtractor,
			secretOrKey: process.env.JWT_SECRET,
		},
		(jwtPayload, done) => {
			return done(null, jwtPayload);
		}
	)
);
