var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Sleepy Hollow", 
    image: "https://farm5.staticflickr.com/4014/4634310948_203e83b756.jpg",
    description: "Bacon ipsum dolor amet beef shank kevin, ham short ribs pork loin shankle venison. Porchetta burgdoggen cow shoulder, turducken leberkas prosciutto doner frankfurter venison shank chicken spare ribs tenderloin."
  },
  {
    name: "Rocky Top", 
    image: "https://farm5.staticflickr.com/4100/4798314980_bc31231984.jpg",
    description: "Bacon ipsum dolor amet beef shank kevin, ham short ribs pork loin shankle venison. Porchetta burgdoggen cow shoulder, turducken leberkas prosciutto doner frankfurter venison shank chicken spare ribs tenderloin."
  },
  {
    name: "Green Hill View", 
    image: "https://farm4.staticflickr.com/3129/2614431976_71ac060c3f.jpg",
    description: "Bacon ipsum dolor amet beef shank kevin, ham short ribs pork loin shankle venison. Porchetta burgdoggen cow shoulder, turducken leberkas prosciutto doner frankfurter venison shank chicken spare ribs tenderloin."
  }
];

function seedDB(){
  // Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }else {
      console.log("removed campgrounds");
        // add a few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
        if(err){
          console.log(err);
      }else {
          console.log("added a campgound");
          // create a comment
          Comment.create(
            {
              text: "This place is great, but I wish they had internet",
              author: "Homer"
            }, function(err, comment){
                if(err){
                  console.log(err);
              }  else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("created new comments");
              }
            });
          }
        });
      });
    }
  });
}

module.exports = seedDB;