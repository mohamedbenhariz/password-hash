const argon2 = require("argon2");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password } = req.body || {};

  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }

  if (typeof password !== "string") {
    return res.status(400).json({ error: "Password must be a string" });
  }

  if (password.length > 256) {
    return res.status(400).json({ error: "Password too long (max 256 characters)" });
  }

  try {
    const hash = await argon2.hash(password);
    return res.status(200).json({ hash });
  } catch (err) {
    return res.status(500).json({ error: "Failed to hash password" });
  }
};
