# ── Stage 1: build native bindings ────────────────────────────────────────────
FROM dhi.io/node:25-debian13-dev AS builder

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# ── Stage 2: lean runtime image ───────────────────────────────────────────────
FROM dhi.io/node:25-debian13-dev

ARG VERSION=dev

LABEL org.opencontainers.image.title="password-hash" \
      org.opencontainers.image.description="CLI to generate an Argon2id hash from a password." \
      org.opencontainers.image.version="${VERSION}"

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY index.js ./

ENTRYPOINT ["node", "index.js"]
