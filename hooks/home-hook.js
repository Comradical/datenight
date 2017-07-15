

var activities = ["Painting", "Tennis", "Volleyball", "Broadway", "Hiking", "Swimming" ];

module.exports = function(req, res){
  res.render("home", {activities: activities});
};