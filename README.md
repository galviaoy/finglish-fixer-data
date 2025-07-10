# Finglish Fixer Rules

This repository contains the latest rule set used by the Finglish Fixer Google Docs add-on. The main file, [`finglish_fixer_rules.json`](./finglish_fixer_rules.json), includes:

- A **regex pattern** for each Finglish phrase or structure
- A **clear explanation** of why it may be problematic
- A **suggestion** for more natural or idiomatic English
- Metadata such as **category**, **tier** (free vs premium), and **POS-aware matching flags**

## ⚙️ How to Use

You can fetch the rule file directly in your script or app:

https://raw.githubusercontent.com/galviaoy/finglish-fixer-data/main/finglish_fixer_rules.json


This format is optimized for use in Finglish Fixer's backend, where it supports fast regex-based and context-aware matching of common Finnish-English patterns.

## 📋 Source

The rules are based on real-world examples of English usage in Finland. They have been compiled and curated by Ian Mac Eochagáin, a translator and language consultant based in Lohja.

## 📐 Licence

MIT — free to use and adapt. Contributions welcome!
