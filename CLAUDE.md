# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies (requires build tools: python3, make, g++)
npm install

# Run locally
node index.js "mypassword"

# Build Docker image
docker build -t password-hash .

# Run via Docker (primary use case)
docker run --rm password-hash "mypassword"
```

## Architecture

Single-file CLI (`index.js`). Takes a password as `process.argv[2]`, validates it (non-empty, max 256 chars), hashes it with `argon2.hash()` (Argon2id by default), and prints the hash to stdout. Exits with code `1` on error.

**Dependency:** `argon2` npm package — uses native C bindings, requires `python3 make g++` at install time. The Dockerfile uses a **multi-stage build**: Alpine + build tools in stage 1 to compile the bindings, then a clean Alpine image in stage 2 with only the compiled `node_modules` and `index.js`.

**Entrypoint:** `ENTRYPOINT ["node", "index.js"]` — the password is passed as the Docker `CMD` argument.
