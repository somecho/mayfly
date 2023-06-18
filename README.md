# Mayfly - your notes last 24 hours
Mayfly is a private notepad for writing your daily ephemeral scratches. Every day at midnight, your notes get wiped out, leaving you a clean page to work with again. Inspired by [the insect](https://en.wikipedia.org/wiki/Mayfly) with an adult lifespan of 24 hours. _You don't need to remember everything_. 

### Markdown
Mayfly renders your notes as markdown so that you can still have some style, despite the short lifespan. 

### Privacy 
Your notes are saved in your browser's local storage. Nothing is sent out, nothing goes into the net. It's safe with you. 

## Development 
Mayfly is a ClojureScript project that uses [shadow-cljs](https://github.com/thheller/shadow-cljs). To develop locally, you will need
- node.js
- JDK version 11 and above

```
git clone https://github.com/somecho/mayfly/
cd mayfly
npm install
npx shadow-cljs watch app
```

---

© 2023 Somē Cho
