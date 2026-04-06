const express = require("express");
const router = express.Router();

const { getSummary } = require("../controllers/summaryController");
const { mockAuth } = require("../middleware/authMiddleware");

router.get("/", mockAuth, getSummary);

module.exports = router;