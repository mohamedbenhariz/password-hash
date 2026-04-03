# password-hash

CLI Docker image that hashes a password using **Argon2id** and prints the hash to stdout.

## Quick start

```bash
docker run --rm ghcr.io/mohamedbenhariz/password-hash "mypassword"
```

Output example:

```
$argon2id$v=19$m=65536,t=3,p=4$abc123...$xyz789...
```

## Usage

### Docker (recommended)

```bash
# GitHub Container Registry
docker run --rm ghcr.io/mohamedbenhariz/password-hash "<password>"

# Docker Hub
docker run --rm mohamedbenhariz/password-hash "<password>"
```

### Local (Node.js)

```bash
# Install dependencies (requires python3, make, g++)
npm install

# Run
node index.js "mypassword"
```

## Tags

| Tag | Description |
|-----|-------------|
| `latest` | Latest stable release |
| `1.2.3` | Exact version |
| `1.2` | Minor version |
| `1` | Major version |

## Behavior

| Input | Output |
|-------|--------|
| Valid password (≤ 256 chars) | Argon2id hash on stdout, exit code `0` |
| Empty password | Error on stderr, exit code `1` |
| Password > 256 chars | Error on stderr, exit code `1` |

## Use in a script

```bash
HASH=$(docker run --rm ghcr.io/mohamedbenhariz/password-hash "mypassword")
echo "Hash: $HASH"
```

## Algorithm

- **Algorithm:** Argon2id (winner of the [Password Hashing Competition](https://www.password-hashing.net/))
- **Library:** [`argon2`](https://www.npmjs.com/package/argon2) npm package (native C bindings)
- **Default parameters:** `m=65536` (64 MB), `t=3` (3 iterations), `p=4` (4 threads)

## License

[MIT](LICENSE)
