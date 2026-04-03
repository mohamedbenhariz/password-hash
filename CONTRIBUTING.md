# Contributing

Thank you for your interest in contributing to **password-hash**.

## Ground rules

- The `main` branch is **protected** — all changes must go through a Pull Request.
- PRs require **at least one approval** from a maintainer before merging.
- Direct pushes to `main` are not allowed.

## How to contribute

1. **Fork** the repository and create a branch from `main`:

   ```bash
   git checkout -b feat/my-feature   # new feature
   git checkout -b fix/my-bug        # bug fix
   ```

2. **Branch naming convention**

   | Prefix | Use for |
   |--------|---------|
   | `feat/` | New feature or endpoint |
   | `fix/` | Bug fix |
   | `refactor/` | Code cleanup with no behavior change |
   | `docs/` | Documentation only |
   | `ci/` | CI / workflow changes |
   | `chore/` | Dependency bumps, config |

3. **Commit message convention** (inspired by [Conventional Commits](https://www.conventionalcommits.org/)):

   ```
   <type>(<scope>): <short description>

   # Examples
   feat(cli): add --rounds flag to tune Argon2 cost
   fix(hash): handle empty password edge case
   ci(docker): add arm64 build target
   docs: update CONTRIBUTING with branch rules
   ```

4. **Before opening a PR**, make sure:
   - The Docker image builds: `docker build .`
   - The CLI works locally: `node index.js "testpassword"`
   - The Docker image runs: `docker run --rm password-hash "testpassword"`
   - No secrets or `.env` files are staged.

5. **Open a Pull Request** against `main` and fill in the PR template completely.

6. A maintainer will review and either approve or request changes. Please address all comments before re-requesting review.

## Security issues

Do **not** open a public issue for security vulnerabilities. Contact the maintainer directly.
