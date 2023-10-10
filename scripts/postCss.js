const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const comments = require('postcss-discard-comments');
const fs = require('fs');

fs.readFile('src/auro-checkbox-group.css', (err, css) => {
  postcss([autoprefixer, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .process(css, { from: 'src/auro-checkbox-group.css', to: 'src/auro-checkbox-group.css' })
    .then(result => {
      fs.writeFile('src/auro-checkbox-group.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('src/checkbox.map', result.map, () => true)
      }
    })
});

fs.readFile('src/auro-checkbox-group.css', (err, css) => {
  postcss([autoprefixer, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .process(css, { from: 'src/auro-checkbox-group.css', to: 'src/auro-checkbox-group.css' })
    .then(result => {
      fs.writeFile('src/auro-checkbox-group.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('src/checkbox-group.map', result.map, () => true)
      }
    })
});
