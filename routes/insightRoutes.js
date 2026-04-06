const express = require("express");
const router = express.Router();

const { getInsights } = require("../controllers/insightController");
const { mockAuth } = require("../middleware/authMiddleware");

router.get("/", mockAuth, getInsights);

module.exports = router;