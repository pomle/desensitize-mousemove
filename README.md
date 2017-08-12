# Desensitize Mousemove

A wrapper for mousemove event handlers that requires initial movement before passing thru event to handler. Useful for when mousemove needs to be taken into account subtle mousemove must be ignored because they are assumed to be inadvertent.

Once threshold has been met all events will be passed thru until no more events are passed

## Usage.

```js
var desensitize = require('desensitize-mousemove');

function onMouseMove(event) {
  console.log('Deliberate mousemove');
}

// Time in milliseconds how long mouse must be active before passing thru event.
const COUNTDOWN = 200;

// Time in milliseconds until measuring is reset.
const TIMEOUT = 500;

document.body.addEventListener(
  'mousemove',
  desensitize(onMouseMove, COUNTDOWN, TIMEOUT)
);
```
