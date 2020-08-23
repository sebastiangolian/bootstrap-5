const ghpages = require('gh-pages');

console.log("Publish dist in gh-pages");
ghpages.publish('dist');