# Desensitize Mousemove

A wrapper for mousemove event handlers that requires initial movement before passing thru event to handler. Useful for when mousemove needs to be taken into account while subtle mousemove must be ignored because they are assumed to be inadvertent.

Once threshold has been met all events will be passed thru. Passthru will stop when timeout reached and threshold must be met again.

## Usage.

```js
var desensitize = require('desensitize-mousemove');

function onMouseMove(event) {
  console.log('Deliberate mousemove');
}

// Time in milliseconds for how long mouse must
// be active before passing thru event.
var COUNTDOWN = 200;

// Time in milliseconds until measuring is reset.
var TIMEOUT = 500;

document.body.addEventListener(
  'mousemove',
  desensitize(onMouseMove, COUNTDOWN, TIMEOUT)
);
```
