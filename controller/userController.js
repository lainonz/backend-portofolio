const User = require("../model/userModel");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ username: user.username });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
