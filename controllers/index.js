const cors = require("cors");
const express = require("express");
const router = express.Router();
router.use(cors());

router.use("/user", require("./users"));
router.use("/search", require("./houses"));

// default
router.get("/", function (req, res) {
  res.json({
    status: "Server responding",
  });
});

module.exports = router;
