const argon2 = require("argon2");

async function main() {
  const password = process.argv[2];

  if (!password) {
    console.error("Usage: docker run --rm password-hash \"<password>\"");
    process.exit(1);
  }

  if (password.length > 256) {
    console.error("Error: password too long (max 256 characters).");
    process.exit(1);
  }

  const hash = await argon2.hash(password);
  console.log(hash);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
