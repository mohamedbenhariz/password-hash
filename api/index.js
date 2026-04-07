module.exports = (req, res) => {
  res.status(200).json({
    name: "password-hash API",
    version: "1.0.0",
    description: "Hash passwords using Argon2id",
    endpoints: {
      "POST /api/hash": {
        description: "Hash a password with Argon2id",
        body: { password: "string (max 256 chars)" },
        response: { hash: "string" },
      },
    },
    example: {
      curl: 'curl -X POST https://<your-domain>/api/hash -H "Content-Type: application/json" -d \'{"password": "mypassword"}\'',
    },
  });
};
