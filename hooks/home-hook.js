var express     = require("express"),
    router      = express.Router(),
    activities  = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];


router.get("/", function(req, res){
  res.render("home", {activities: activities});
});

module.exports = router;