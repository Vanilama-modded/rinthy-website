# GitHub Packages Integration

Rinthy is published to the **GitHub Packages npm registry** (`npm.pkg.github.com`). This document explains how to install and use the package from GitHub Packages.

---

## Install from GitHub Packages

### 1. Authenticate with GitHub

Create a [Personal Access Token (classic)](https://github.com/settings/tokens) with the `read:packages` scope.

Then login to the GitHub npm registry:

```bash
npm login --registry=https://npm.pkg.github.com --scope=@imsawiq
```

When prompted, enter:
- **Username:** your GitHub username
- **Password:** your Personal Access Token (not your GitHub password)
- **Email:** your public email

### 2. Configure `.npmrc`

Create or edit `.npmrc` in your project root:

```ini
@imsawiq:registry=https://npm.pkg.github.com
```

Or run:

```bash
echo "@imsawiq:registry=https://npm.pkg.github.com" >> .npmrc
```

### 3. Install the package

```bash
npm install @imsawiq/rinthy-website
```

Or with yarn:

```bash
yarn add @imsawiq/rinthy-website
```

---

## Using in Your Project

```tsx
// Import components
import App from '@imsawiq/rinthy-website/src/App';
import Hero from '@imsawiq/rinthy-website/src/components/Hero';
```

> **Note:** This package is primarily a website/landing page. For app development, see the main [Rinthy repository](https://github.com/imsawiq/Rinthy).

---

## Publishing (Maintainers)

Publishing is handled automatically via GitHub Actions when a new release is created.

### Manual Publish

If you need to publish manually:

```bash
# Ensure you're logged in
npm login --registry=https://npm.pkg.github.com --scope=@imsawiq

# Publish
npm publish
```

### Automated Publish via Release

1. Go to the [Releases](https://github.com/imsawiq/Rinthy/releases) page.
2. Click **"Draft a new release"**.
3. Choose a tag (e.g., `v1.0.0`).
4. Fill in the release title and notes.
5. Click **"Publish release"**.
6. The GitHub Actions workflow will automatically build and publish to GitHub Packages.

---

## Troubleshooting

### 404 Not Found

Make sure you are authenticated and your token has `read:packages` scope.

```bash
npm login --registry=https://npm.pkg.github.com --scope=@imsawiq
```

### Permission Denied

Your token needs:
- `read:packages` — to install packages
- `write:packages` — to publish packages (maintainers only)

### Scope Issues

Always use the scoped package name:

```bash
npm install @imsawiq/rinthy-website
```

---

## Links

- **Package Registry:** https://github.com/imsawiq/Rinthy/pkgs/npm/rinthy-website
- **Releases:** https://github.com/imsawiq/Rinthy/releases
- **Repository:** https://github.com/imsawiq/Rinthy
- **Discord:** https://discord.gg/wzXpC2C6Uu

