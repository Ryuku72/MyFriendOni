const router = require("express").Router();
const { vocablists, letters, users } = require('../model');

router.post("/api/login",  function(req, res) {
});

router.post("/api/signup", function(req, res) {
});

// Route for logging user out
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", function(req, res) {
if (!req.user) {
  // The user is not logged in, send back an empty object
  res.json({});
} else {
  // Otherwise send back the user's email and id
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id
  });
}
});



router.get("/api/database", (req, res) => {
    users.find({}).then(profile => {
        
    letters.find({}).then(words => {
        
    vocablists.find({}).then(data => {
        
        res.json({User: profile, Characters: words, List: data});
      })
    .catch(err => res.status(404).json(err))
}) 
.catch(err => res.status(404).json(err));
}) 
.catch(err => res.status(404).json(err))
})

router.post("/api/vocab", function (req, res) {
  console.log(req.body);
  const words = new vocablists(req.body) 
  words.save(function (err) {
    res.json(words)
  });
})

module.exports = router;