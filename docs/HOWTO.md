# Rinthy — How to Use

Welcome to **Rinthy**, the unofficial mobile app for Modrinth developers. This guide will help you get started and make the most of the app.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Authentication](#authentication)
3. [Dashboard Overview](#dashboard-overview)
4. [Managing Projects](#managing-projects)
5. [Analytics](#analytics)
6. [Versions](#versions)
7. [Team Management](#team-management)
8. [Notifications](#notifications)
9. [Profile Settings](#profile-settings)
10. [Appearance & Themes](#appearance--themes)
11. [Language Settings](#language-settings)
12. [Balance View](#balance-view)
13. [Need Help?](#need-help)

---

## Getting Started

### Installation

1. Download the latest APK from the [GitHub Releases](https://github.com/imsawiq/Rinthy/releases) page.
2. Install the APK on your Android device (you may need to enable "Install from Unknown Sources" in your device settings).
3. Open the app and proceed to authentication.

> **Note:** Rinthy is currently Android-only via APK. The app is built with Capacitor and may support iOS in the future.

---

## Authentication

Rinthy supports two login methods:

### 1. Modrinth OAuth (Recommended)

- Tap **"Sign in with Modrinth"** on the login screen.
- You will be redirected to the Modrinth authorization page.
- Grant the requested permissions.
- You will be redirected back to the app automatically.

### 2. Personal Access Token

- Go to [Modrinth Settings → PATs](https://modrinth.com/settings/pats) and create a new token.
- Copy the token and paste it into the **"Use Personal Access Token"** field in the app.
- Tap **Sign In**.

> **Security Tip:** Never share your Personal Access Token. The app stores it securely on your device.

---

## Dashboard Overview

After logging in, you will see the **Developer Panel** with:

- **Your Projects** — a list of all your Modrinth projects
- **Quick Stats** — total downloads, follows, and recent activity
- **Notifications Badge** — shows unread notifications at a glance

Tap any project to open its detail page.

---

## Managing Projects

### Edit Project Details

1. Open a project from the dashboard.
2. Tap the **Edit** (pencil) icon.
3. You can modify:
   - **Title** — the display name of your project
   - **Summary** — a short one-line description
   - **Description** — full project description (supports markdown)
   - **Links** — source code, issue tracker, Discord, etc.
   - **Status** — active, archived, etc.

4. Tap **Save** to apply changes.

### Project Icons

- You can update the project icon by tapping the icon image and selecting a new file from your gallery.

---

## Analytics

The **Analytics** tab shows:

- **Downloads Over Time** — a chart of daily/weekly/monthly downloads
- **Follows** — follower count trends
- **Engagement** — views and downloads ratio

Use the date range selector to filter data.

---

## Versions

### View Versions

1. Open a project.
2. Tap the **Versions** tab.
3. See all published versions with:
   - Version number
   - Supported loaders (Fabric, Forge, Quilt, etc.)
   - Supported Minecraft versions
   - Release date

### Create/Edit Versions

- Tap **"New Version"** to create a version.
- Tap an existing version to edit its:
  - Version number
  - Changelog
  - Supported loaders & game versions
  - Files (primary & additional)

---

## Team Management

1. Open a project.
2. Tap the **Team** tab.
3. View current team members and their roles:
   - **Owner** — full control
   - **Maintainer** — can edit project and versions
   - **Contributor** — limited permissions

### Add Member

- Tap **"Add Member"**.
- Enter the Modrinth username.
- Select a role.
- Tap **Confirm**.

### Remove Member

- Tap a member's name.
- Tap **"Remove from Team"**.
- Confirm the action.

---

## Notifications

The **Notifications** screen shows:

- New followers
- Version approvals/rejections
- Team invites
- General Modrinth announcements

Tap a notification to open the relevant project or page.  
Swipe left to mark as read or delete.

---

## Profile Settings

Access your profile via the **Profile** tab in the bottom navigation.

You can edit:

- **Username**
- **Bio** — supports markdown
- **Avatar** — upload from gallery or take a photo

Changes are synced with Modrinth immediately.

---

## Appearance & Themes

Go to **Settings → Appearance**:

- **Theme** — Light / Dark / System Default
- **Accent Color** — choose from a preset palette or enter a custom hex code
- **Font Size** — Small / Default / Large

---

## Language Settings

Go to **Settings → Language**:

Available languages:
- **English**
- **Русский (Russian)**
- **Italiano (Italian)**

The app will restart to apply the new language.

---

## Balance View

Navigate to **Profile → Balance** to see:

- Current balance in USD
- Payout history
- Pending earnings

> **Note:** Payouts must still be requested via the Modrinth website.

---

## Need Help?

If you encounter bugs, have feature requests, or need support:

- **Discord:** [https://discord.gg/wzXpC2C6Uu](https://discord.gg/wzXpC2C6Uu)
- **GitHub Issues:** [https://github.com/imsawiq/Rinthy/issues](https://github.com/imsawiq/Rinthy/issues)
- **GitHub Discussions:** [https://github.com/imsawiq/Rinthy/discussions](https://github.com/imsawiq/Rinthy/discussions)

---

## GitHub Packages

You can also install Rinthy via GitHub Packages npm registry:

```bash
# Configure registry
echo "@imsawiq:registry=https://npm.pkg.github.com" >> .npmrc

# Install
npm install @imsawiq/rinthy-website
```

See [GITHUB_PACKAGES.md](./GITHUB_PACKAGES.md) for full details.

---

## Tips & Tricks

- **Pull to refresh** on any list to get the latest data.
- **Long-press** a project in the dashboard to open quick actions.
- **Tap and hold** a version to copy its ID to the clipboard.
- Use the **search bar** in the projects list to filter by name.

---

*Last updated: 2024*
