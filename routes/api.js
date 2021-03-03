const router = require("express").Router();
const axios = require("axios");
const db = require("../models")


router.get("/api/googleBooks/:searchKeyword", function (req, res) {
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        req.params.searchKeyword
    )
    .then(function (results) {
      res.json(results.data.items);
    });
});

router.post("/api/books", function(req,res){
  db.Books.create(req.body)
  .then(function(results){
    res.json(results)
  })
})

router.get("/api/books", function(req,res){
  db.Books.find()
  .then(function(results){
    res.json(results)
  })
})

router.delete("/api/books/:id", function(req,res){
  db.Books.deleteOne({_id:req.params.id})
  .then(function(results){
    res.json(results)
  })
})

module.exports = router;
