const router = require("express").Router();
const { users } = require("../../model");

router.post("/:id", function (req, res) {
    //console.log(req.body)
    users.findOne({ _id: req.params.id }, function (err, user){
        console.log(user)
        if (err) console.log(err)
        if (user) {
            if (user.sessions && user.sessions.length) {
                user.sessions.push(req.body.sessions)
            } 
            else {
                user.sessions = [req.body.sessions];
            }
            user.save()
            .then((saved) => {
                console.log(saved)
                res.json(saved);
              })
            .catch((err) => res.status(422).json(err));
        }
    })
});

module.exports = router;