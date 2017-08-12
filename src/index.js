function desensitizeMouseMove(callback, sluggishness = 5) {
  let next = 0;
  let count = 0;
  return function handleMouseMove(event) {
    const now = Date.now();
    if (next < now) {
      count = 0;
      next = now + 500;
    }
    if (++count > sluggishness) {
      callback(event);
    }
  };
}

module.exports = desensitizeMouseMove;
