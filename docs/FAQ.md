# Frequently Asked Questions (FAQ)

## General

### What is Rinthy?

**Rinthy** is an unofficial mobile app for Modrinth developers. It lets you manage projects, track analytics, handle versions, and more — all from your phone.

### Is Rinthy official?

**No.** Rinthy is an unofficial, community-made app. It is **not affiliated with or endorsed by Modrinth**.

### Is Rinthy free?

**Yes.** Rinthy is completely free and open source.

---

## Installation

### Where can I download Rinthy?

Download the latest APK from the [GitHub Releases](https://github.com/imsawiq/Rinthy/releases) page.

You can also install via GitHub Packages:

```bash
npm install @imsawiq/rinthy-website
```

See [GITHUB_PACKAGES.md](./GITHUB_PACKAGES.md) for details.

### Is there an iOS version?

Not yet. Rinthy is currently Android-only. iOS support may come in the future via Capacitor.

### The APK won't install. What should I do?

Make sure you have enabled **"Install from Unknown Sources"** in your Android settings:
- Go to **Settings → Security → Unknown Sources** (or **Settings → Apps → Special Access → Install Unknown Apps**)
- Enable it for your browser or file manager
- Try installing again

---

## Account & Login

### Is it safe to log in with Modrinth OAuth?

**Yes.** OAuth is the recommended and safest method. Rinthy never sees your Modrinth password.

### What is a Personal Access Token (PAT)?

A PAT is an alternative login method. You can create one in your [Modrinth Settings](https://modrinth.com/settings/pats). It acts like a password for API access.

### I forgot my PAT. What do I do?

Go to [Modrinth Settings → PATs](https://modrinth.com/settings/pats) and revoke the old one, then create a new one.

### Can I use Rinthy with multiple Modrinth accounts?

Currently, Rinthy supports one account at a time. To switch accounts, log out and log in with a different account.

---

## Features

### Can I upload new project versions from the app?

**Yes.** You can create and edit versions, including uploading files.

### Can I change my project icon?

**Yes.** Open a project, tap the icon, and select a new image from your gallery.

### Does Rinthy support all Modrinth project types?

Rinthy supports Mods, Modpacks, Resource Packs, and Shaders.

### Can I view my earnings?

**Yes.** Go to **Profile → Balance** to see your current balance and payout history.

### What languages are supported?

- English
- Русский (Russian)
- Italiano (Italian)

More languages may be added in the future.

---

## Troubleshooting

### The app crashes on startup

1. Make sure you have the latest APK installed.
2. Clear the app cache: **Settings → Apps → Rinthy → Storage → Clear Cache**.
3. If the issue persists, [report a bug](https://github.com/imsawiq/Rinthy/issues).

### Data is not loading

1. Check your internet connection.
2. Pull down to refresh the page.
3. Log out and log back in.
4. If the problem continues, Modrinth API may be temporarily down.

### I can't edit my project

Make sure you have the correct permissions:
- **Owner** and **Maintainer** roles can edit projects.
- **Contributor** role has limited permissions.

### Notifications are not showing

1. Check that notifications are enabled in **Rinthy Settings → Notifications**.
2. Make sure your device is not in Do Not Disturb mode.
3. Check Android notification settings for Rinthy.

---

## Support

### Where can I get help?

- **Discord:** [https://discord.gg/wzXpC2C6Uu](https://discord.gg/wzXpC2C6Uu)
- **GitHub Issues:** [https://github.com/imsawiq/Rinthy/issues](https://github.com/imsawiq/Rinthy/issues)

### How do I report a bug?

Open a [GitHub Issue](https://github.com/imsawiq/Rinthy/issues/new) with:
- A clear description
- Steps to reproduce
- Your device model and Android version
- Screenshots (if possible)

### How do I request a feature?

Start a [GitHub Discussion](https://github.com/imsawiq/Rinthy/discussions) or join our [Discord](https://discord.gg/wzXpC2C6Uu) and share your idea!

---

## Development

### Can I contribute to Rinthy?

**Yes!** See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### What tech stack does Rinthy use?

- React + TypeScript
- Tailwind CSS
- Capacitor (for mobile)
- Vite

### Is the source code available?

**Yes.** Rinthy is open source under the MIT license. Check out the [GitHub repository](https://github.com/imsawiq/Rinthy).
