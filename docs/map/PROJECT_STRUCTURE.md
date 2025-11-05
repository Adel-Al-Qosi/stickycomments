# Project Structure Overview

## High-Level Architecture

```
    stickycomments/
    ├── docs/
    │   ├── DEVLOG.md
    │   ├── diagrams/
    │   │   ├── diagrams.md
    │   │   └── high-level.png
    │   ├── map/
    │   │   ├── changes.md
    │   │   ├── edge-cases.md
    │   │   ├── FEATURES.md
    │   │   ├── future-plans.md
    │   │   ├── PROJECT_STRUCTURE.md    (You are here)
    │   │   └── ROADMAP.md
    │   ├── MAP_INDEX.md
    │   ├── technical_docs/
    │   │   └── TECH_STACK.md
    │   └── TECHNICAL_INDEX.md
    ├── .gitignore
    ├── integrations/
    │   ├── index.js
    │   └── vscode/
    │       └── api/
    ├── LICENSE/
    ├── package.json
    ├── README.md
    ├── src/
    │   ├── api/
    │   ├── commentsManger/
    │   │   └── index.js
    │   ├── db/
    │   │   └── index.js
    │   ├── index.js
    │   ├── languageSupport/
    │   │   └── index.js
    │   ├── parser/
    │   │   └── index.js
    │   └── tracker/
    │       └── index.js
    └── tests/
```