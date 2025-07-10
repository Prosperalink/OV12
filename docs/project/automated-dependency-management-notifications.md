# Dependency Update Notifications

**Last updated:** July 2025
**Version:** 1.0

---

## Overview

This document describes how to set up notifications for automated dependency update PRs in the Orson Vision project.

---

## 1. GitHub Notifications

- **Default:** All PRs and issues generate notifications in GitHub.
- **Recommended:** Watch the repository or enable notifications for PRs/issues.
- **Settings:**
  - Go to the repository page
  - Click the "Watch" button (top right)
  - Select "All Activity" or "Custom"

---

## 2. Slack/Teams Integration (Optional)

- **Slack:**
  - Use [GitHub’s Slack integration](https://slack.github.com/)
  - Configure to post PRs/issues to a channel
  - Filter for Renovate/Dependabot PRs using labels or keywords
- **Microsoft Teams:**
  - Use [GitHub’s Teams integration](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)
  - Add an incoming webhook to a channel
  - Configure GitHub to send PR notifications

---

## 3. Custom Alerts (Advanced)

- Use GitHub Actions or webhooks to trigger custom notifications for critical PRs (e.g., security, breaking changes).
- Example: Use a workflow to send a Slack message when a PR is labeled `security` or `breaking-change`.

---

## References

- [GitHub Notifications](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github)
- [GitHub Slack Integration](https://slack.github.com/)
- [GitHub Teams Integration](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)
