const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const House = require("../models/db/houses");
var jwt = require("jsonwebtoken");
// const verifyToken = require("../middlewares/authJwt");
const config = require("../config/auth.config");
const createToken = require("../models/logic/authToken");
const verifyToken = require("../middlewares/authJwt");

router.post("/addHouse", async (req, res) => {
  // for now skipping uid verification

  const house = await House.create({
    img: req.body.img,
    title: req.body.title,
    description: req.body.description,
    star: req.body.star,
    price: req.body.price,
    total: req.body.total,
  });
  house
    .save()
    .then(() => {
      res.json({ message: "house saved", ok: true }).status(201);
    })
    .catch((err) => {
      console.log("error in saving house: ", err);
      res.json({ message: "house not saved !!", ok: false }).status(400);
    });
});

router.post("/fetchHouses", verifyToken, (req, res) => {});

module.exports = router;
