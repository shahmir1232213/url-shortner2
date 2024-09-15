const short_unique_id = require("short-unique-id")
const express = require("express")
const router = express.Router();
const controller = require("../controller/route.function")
const urlModel = require("../model/schema.model")

router.post("/post",controller.getID)

router.get("/:shortID",controller.redirectURL)

module.exports = router;