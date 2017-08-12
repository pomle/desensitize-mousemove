# Desensitize Mousemove

A wrapper for mousemove event handlers that requires initial movement before passing thru event to handler. Useful for when mousemove should activate something but subtle mousemove should be ignored because they are assumed to be inadvertent.

## Usage.

```js
var desensitize = require('desensitize-mousemove');

function onMouseMove(event) {
  console.log('Deliberate mousemove');
}

// Anti-sensitivity. The higher the number the more aggressive the mousemove needs to be.
const SLUGGISHNESS = 20;

document.body.addEventListener(
  'mousemove',
  desensitize(onMouseMove, SLUGGISHNESS)
);
```
