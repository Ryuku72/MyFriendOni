const router = require("express").Router();
const validator = require("validator");
const passport = require("./../../../config/passport");
const users = require("./../../../model/users");

router.post("/register", (req, res, next) => {
  const validationErrors = [];
  if (!validator.isAlphanumeric(req.body.username || "", "en-US"))
    validationErrors.push({
      msg: "Username must only contain letters and numbers",
    });
  if (!validator.isLength(req.body.username || "", { min: 6 }))
    validationErrors.push({
      msg: "Username must be at least 6 characters long",
    });
  if (!validator.isLength(req.body.password || "", { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.password_again)
    validationErrors.push({ msg: "Passwords do not match" });
  if (validationErrors.length) {
    return res.status(422).json({
      errors: validationErrors,
    });
  }
  const patron = new users({
    username: req.body.username,
    password: req.body.password,
  });

  users.findOne({ username: req.body.username }, (error, existingUser) => {
    if (error) {
      return next(error);
    }
    if (existingUser) {
      return res.status(422).json({
        errors: [
          {
            msg: "Account with that username already exists.",
          },
        ],
      });
    }
    patron.save((error) => {
      if (error) {
        return next(error);
      }
      req.logIn(patron, (error) => {
        if (error) {
          return next(error);
        }
        res.json({
          data: patron,
        });
      });
    });
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (error, patron, info) => {
    console.log({ error });
    if (error) {
      return next(error);
    }
    if (!patron) {
      return res.status(422).json({
        errors: [
          {
            msg: info.msg,
          },
        ],
      });
    }
    //console.log("Backend - Auth Line 77: ", { patron: patron._id });
    req.logIn(patron, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [{ msg: err }],
        });
      }
      res.json({
        data: patron,
      });
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
    console.log('logOut initiated');
    req.logout();
    req.session.destroy((err) => {
        if (!err) {
            res.status(200).clearCookie('connect.sid', {path: '/'}).json({status: "Success"});
        } else {
            res.json({
                data: {
                    error: "Failed to destroy the session during logout.",
                    err,
                },
            });

        }
        req.user = null;
    });
    
});

module.exports = router
