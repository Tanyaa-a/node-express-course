const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide username and password" });
  }
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  res.status(200).json({ token });
};

const hello = async (req, res) => {
  console.log(req.user);
  res.status(200).json({
    message: `Hello, ${req.user.username}!`,
  });
};

module.exports = { logon, hello };
