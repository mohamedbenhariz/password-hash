var version = require("../package.json").version;
module.exports = (req, res) => {
  res.status(200).json({
    name: "password-hash API",
    version: version,
    description: "Hash passwords using Argon2id",
    endpoints: {
      "POST /api/hash": {
        description: "Hash a password with Argon2id",
        body: { password: "string (max 256 chars)" },
        response: { hash: "string" },
      },
    },
    example: {
      curl: 'curl -X POST https://password-hash-live.vercel.app/api/hash -H "Content-Type: application/json" -d \'{"password": "mypassword"}\'',
    },
  });
};
