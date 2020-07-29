const router = require("express").Router();
const { users } = require("../../model");

//find user
router.get("/:id", function (req, res) {
  users
    .findOne({ _id: req.params.id })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

//update points
router.put("/update/:id", function (req, res) {
  console.log(req.body);
  users
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

//update login details
router.post("/:id", function (req, res) {
  console.log("Backend", req.body.username);
  console.log("Backend", req.body.password);
  console.log("Backend", req.body.previouspw);
  previouspw = { password: req.body.previouspw };
  request = { username: req.body.username, password: req.body.password };

  req.user.comparePassword(req.body.previouspw, (err, isMatch) => {
    if (err) {
      res.json(err);
    }
    if (!isMatch) {
      res.status(422).json({ errors: "Incorrect Current Password" });
    } else {
      //console.log("Is match")
      const currentUser = req.user;
      currentUser.password = request.password;
      currentUser.username = request.username;

      currentUser
        .save()
        .then((saved) => {
          res.json(saved);
        })
        .catch((err) => res.status(422).json(err));
    }
  });
});

//delete user
router.put("/delete/:id", function (req, res) {
  console.log("delete hit backend");
  console.log("Backend pw = ", req.body.password);
  console.log("Backend id = ", req.params.id);

  req.user.comparePassword(req.body.password, (err, isMatch) => {
    if (err) {
      res.json(err);
    }
    if (!isMatch) {
      res.status(422).json({ errors: "Incorrect Current Password" });
    } else {
      users
        .findById({ _id: req.params.id })
        .then((dbModel) => {
          console.log(req.params.id + " Deleted");
          dbModel.remove();
        })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    }
  });
});

module.exports = router;
