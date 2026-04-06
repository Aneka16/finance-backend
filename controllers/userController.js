const users = require("../models/userModel");

exports.createUser = (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({ message: "All fields required" });
    }

    const newUser = {
        id: Date.now(),
        name,
        role,
        active: true
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

exports.getUsers = (req, res) => {
    const activeUsers = users.filter(u => u.active);
    res.json(activeUsers);
};

exports.deactivateUser = (req, res) => {
    const { id } = req.params;

    const user = users.find(u => u.id == id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.active = false;

    res.json({ message: "User deactivated successfully" });
};