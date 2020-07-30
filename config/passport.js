const passport = require("passport");
const _ = require("lodash");
const users = require("./../model/users")
const { Strategy: LocalStrategy } = require("passport-local");

passport.serializeUser((user, done) => {
    //console.log('serialize user');
    //console.log({user});
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
      //console.log("deserialize user");
  
      users.findById(id, (err, user) => {
          //console.log('deserialise');
          //console.log({user});
          done(err, user);
      });
  });

passport.use(new LocalStrategy((username, password, done) => {
    //console.log("passport activated")
        users.findOne( {username: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                // done(err, user, info pass back to controller)
              return done(null, false, { msg: `User not found.` });
            }
            if (!user.password) {
              return done(null, false, { msg: `Please enter a password.` });
            }
            user.comparePassword(password, (err, isMatch) => {
              if (err) { return done(err); }
              if (isMatch) {
                return done(null, user);
              }
              return done(null, false, { msg: `Invalid email or password.` });
            });
          });
        }));
        

module.exports = passport