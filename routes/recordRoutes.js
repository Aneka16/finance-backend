const express = require("express");
const router = express.Router();

const {
  createRecord,
  getRecords,
  getSummary, // ✅ ADD THIS
} = require("../controllers/recordController");

const { authorizeRoles } = require("../middleware/roleMiddleware");
const { mockAuth } = require("../middleware/authMiddleware");

// ✅ Apply auth + roles

// CREATE
router.post("/", mockAuth, authorizeRoles("admin"), createRecord);

// GET ALL
router.get("/", mockAuth, authorizeRoles("admin", "analyst"), getRecords);

// ✅ SUMMARY (ADD THIS)
router.get("/summary", mockAuth, authorizeRoles("admin", "analyst"), getSummary);

module.exports = router;