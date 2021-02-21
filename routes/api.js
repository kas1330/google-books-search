const router = require("express").Router();
const axios = require("axios");
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

module.exports = router;
