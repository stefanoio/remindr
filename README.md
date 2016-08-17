# Remindr
## Continue your reading where you left off.

Remindr is a small (<1KB) utility that reminds where the user left your article and helps to recover its reading. Basically it stores the scrolling position inside localstorage and resets it when the user come back.

It works on any modern and not-so-prehistoric browser (IE9+) and has no dependency from any library.

Here’s a demo: http://stefano.io/remindr/demo.html

To build a minified version inside the dist folder you can use:
```
npm install && npm run build
```