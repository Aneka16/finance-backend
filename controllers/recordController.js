const Record = require("../models/recordModel");

// CREATE RECORD
exports.createRecord = async (req, res) => {
  try {
    let { amount, type, category } = req.body;

    const amt = Number(amount);
    const normalizedType = String(type).trim().toLowerCase();

    console.log("Incoming:", { amount, type, category });
    console.log("Processed:", { amt, normalizedType });

    // ✅ Validation
    if (isNaN(amt) || !normalizedType || !category) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (amt <= 0) {
      return res.status(400).json({ message: "Amount must be positive" });
    }

    if (!["income", "expense"].includes(normalizedType)) {
      return res.status(400).json({ message: "Invalid type" });
    }

    // 🔴 Business Rule
    if (normalizedType === "expense" && amt > 10000) {
      return res.status(400).json({
        message: "Expense exceeds allowed limit (10,000)",
      });
    }

    // ✅ Save to MongoDB
    const record = await Record.create({
      amount: amt,
      type: normalizedType,
      category,
      date: new Date(),
    });

    res.status(201).json(record);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// GET RECORDS (WITH FILTERING)
exports.getRecords = async (req, res) => {
  try {
    const { type, category, minAmount, maxAmount } = req.query;

    let filter = {};

    if (type) {
      filter.type = type.trim().toLowerCase();
    }

    if (category) {
      filter.category = category;
    }

    if (minAmount || maxAmount) {
      filter.amount = {};
      if (minAmount) filter.amount.$gte = Number(minAmount);
      if (maxAmount) filter.amount.$lte = Number(maxAmount);
    }

    const records = await Record.find(filter);

    res.json(records);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ✅ SUMMARY API (THIS WAS MISSING)
exports.getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach((r) => {
      if (r.type === "income") totalIncome += r.amount;
      else totalExpense += r.amount;
    });

    res.json({
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};