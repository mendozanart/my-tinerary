const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/user.js");

module.exports = passport.use(
  new jwtStrategy(
    {

      jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRETKEY,

    },(jwt_payload, done) => {
      console.log(jwt_payload)
      console.log(process.env.SECRETKEY)
      User.findOne({ _id: jwt_payload.id })
        .then(user => {
          if (user) {
            return done(null, user)
          }  else {
            // eslint-disable-next-line no-undef
            return done(error, false)
          }
        }).catch(error => {return done(error, false)})
      }))
