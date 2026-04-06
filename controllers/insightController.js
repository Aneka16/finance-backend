const records = require("../models/recordModel");

exports.getInsights = (req, res) => {
    let highestExpense = 0;
    let topCategory = "";
    const categoryTotals = {};

    records.forEach(r => {
        if (r.type === "expense") {
            if (r.amount > highestExpense) {
                highestExpense = r.amount;
            }

            if (!categoryTotals[r.category]) {
                categoryTotals[r.category] = 0;
            }
            categoryTotals[r.category] += r.amount;
        }
    });

    let max = 0;
    for (let cat in categoryTotals) {
        if (categoryTotals[cat] > max) {
            max = categoryTotals[cat];
            topCategory = cat;
        }
    }

    res.json({
        highestExpense,
        topSpendingCategory: topCategory
    });
};