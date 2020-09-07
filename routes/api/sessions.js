const router = require("express").Router();
const { sessions } = require("../../model");

router.post("/:id", function (req, res) {
    //console.log(req.body)
    sessions.create({
        user_id: req.params.id, 
        date: Date.now(),
        language: req.body.language,
        score: req.body.score,
        correct: req.body.correct,
        incorrect: req.body.incorrect
})
.then((created)=> {
    console.log(created)
    res.json(created);
})
.catch((err) => res.status(422).json(err));
})

router.get("/:id", function (req, res){
   //console.log(req.params)
    sessions
    .find({ user_id: req.params.id })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
})

router.delete("/:id", function (req, res){
    //console.log(req.params.id)
    sessions.findByIdAndDelete(req.params.id)
    .then((deleted) => { res.json({deleted})
})
    .catch((err) => res.status(422).json(err));
})

module.exports = router;