const express = require("express");

const router = express.Router();

const brandCtrl = require("../controllers/brand");

router.get("/brand/add", brandCtrl.brand_create_get);
router.post("/brand/add", brandCtrl.brand_create_post);

module.exports = router;