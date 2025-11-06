# StickyComments Roadmap

## Overview

StickyComments is a personal project in development! The aim is to help devs keep track of code comments across a codebase, by integrating with IDEs and editors. The focus is on exploring ways to make comments more useful, discoverable, and manageable.

This roadmap is not a polished announcement; it's a collection of ideas, pain points, and goals to lead the efforts, with plans to add clarity and direction.

---

## Core Problems To Solve

The main comment-related points StickyComments trying to address:

- Outdated or misleading comments:
  - When a disconnect happens between code change or enhancement and forgotten comments.
- Tracking comments and ease to find common tags (TODO, FIXME, etc.):
  - Helps find important notes, tasks, and reminders scattered across files.
- Discovering important or hidden context:
  - Warnings, explanations, edge-case notes can be tricky to find.
- Searching and filtering comments:
  - Being able to hunt down what matters saves time.
- Important metadata (who wrote it, where, when):
  - Can be handy for context, especially in bigger codebases.

---

## Initial Release Focus

- Scan for comments and their metadata out of source code after setting up StickyComments in a project/codebase.
- Save them in a local dedicated lite database.
- Ensuring proper tags detection.
- Storing useful metadata and providing helpful context.
- Searching and filtering comments across a project/codebase.
- Core inline functionalities.
- Limited experimentation with an initial language support.
- Porting to one initial code environment.
- Explore StickyComments dedicated flags for different uses.

---

## Possible Additions / Ideas To Explore

- Notification systems (flagging comments when code changes, reminders to update, etc.)
- User-defined tags/flags for custom workflows.
- More advanced tagging—meaning and styles, not just common ones.
- Quality/style checking for comments, maybe customizable per project.
- Integration with git commits (linking comments with commit history).
- In-editor UI (sidebar, popups, overlays) for easier browsing.
- Creating and tracking state for comments (in progress, done, etc.).
- Shortcut commands or templates for fast comment styles.
- Analytics on comment (e,g,. usage/update frequency).
- Exploring AI integration for comments' clarity.
- Visibility flags for setting more private comments (e,g,. A personal comment, a comment dedicated to a certain team member).
- Threaded discussions on comments right in the IDE.
- Linting, onboarding helpers, and general fun extras if found valuable.

Many ideas are experimental and subject to further evaluation as development continues.

---

## Notes

This project is still in initial development stages.

Contribution docs will be added later if/when needed.

Feel free to ask questions, give feedback, request features or suggest improvements.

---
