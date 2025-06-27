# Finglish Fixer Pattern List

This file, [`finglish_patterns_101.js`](./finglish_patterns_101.js), contains 101 commonly found Finnish-English (Finglish) expressions that are unnatural or unidiomatic in English. Each entry includes:

- A **regex** pattern to detect the phrase in a Google Docs document
- An **explanation** of why it’s problematic
- A **native-sounding suggestion**
- A **category** (e.g., "Fake Idiom", "Grammar")

## ⚙️ How to Use in Google Apps Script

1. **Copy the full contents** of `finglish_patterns_101.js`.
2. **Paste into your script project** in the Google Apps Script editor.
   - You can put it at the top of your `Code.gs`, or in its own `.gs` file.
3. In your detection function (e.g. `getSuggestions()`), loop through the `PHRASE_PATTERNS` array and apply each regex to the document body text.

```javascript
PHRASE_PATTERNS.forEach(pattern => {
  const regex = pattern.regex;
  const match = regex.exec(text);
  if (match) {
    // Display suggestion, explanation, etc.
  }
});
