const express = require("express");
const router = express.Router();

// -- /fruits - get all fruits
// -- /fruits/:id - gets fruits by id

let fruits = [
  { id: 1, name: "mango" },
  { id: 2, name: "grape" },
  { id: 3, name: "kiwi" }
];

router.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ listOfFruits: fruits });
});

router.get("/:id", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  fruits.forEach(fruit => {
    if (fruit.id === parseInt(req.params.id)) {
      res.json({ chosenFruit: fruit })
    }
  });

  next();
});

module.exports = router;
