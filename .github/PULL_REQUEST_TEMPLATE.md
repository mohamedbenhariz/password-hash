## Description

<!-- Explain clearly what this PR does and why. -->

## Type of change

- [ ] Bug fix
- [ ] New feature / endpoint
- [ ] Refactor (no behavior change)
- [ ] Documentation
- [ ] CI / infra

## Checklist

- [ ] My changes follow the coding style of this project
- [ ] I have tested the affected endpoint(s) manually (`POST /hash`, `GET /health`)
- [ ] The Docker image still builds locally (`docker build .`)
- [ ] No secrets, credentials, or `.env` files are committed
- [ ] I have updated `CLAUDE.md` if the architecture or commands changed

## How to test

<!-- Provide curl commands or steps to verify your change. -->

```bash
# Example
curl -s -X POST http://localhost:3000/hash \
  -H "Content-Type: application/json" \
  -d '{"password": "test1234"}' | jq
```
