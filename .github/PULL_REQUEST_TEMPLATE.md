## Description

<!-- Explain clearly what this PR does and why. -->

## Type of change

- [ ] Bug fix
- [ ] New feature
- [ ] Refactor (no behavior change)
- [ ] Documentation
- [ ] CI / infra

## Checklist

- [ ] My changes follow the coding style of this project
- [ ] I have tested the CLI manually (`node index.js "testpassword"`)
- [ ] The Docker image still builds locally (`docker build .`)
- [ ] The Docker run works (`docker run --rm password-hash "testpassword"`)
- [ ] No secrets, credentials, or `.env` files are committed
- [ ] I have updated `CLAUDE.md` if the architecture or commands changed

## How to test

<!-- Provide commands or steps to verify your change. -->

```bash
# Local
node index.js "testpassword"

# Docker
docker build -t password-hash .
docker run --rm password-hash "testpassword"
```
