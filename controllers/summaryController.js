const records = require("../models/recordModel");

exports.getSummary = (req, res) => {
    let income = 0;
    let expenses = 0;

    records.forEach(r => {
        if (r.type === "income") income += r.amount;
        else expenses += r.amount;
    });

    res.json({
        totalIncome: income,
        totalExpenses: expenses,
        netBalance: income - expenses
    });
};