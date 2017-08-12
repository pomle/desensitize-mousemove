function desensitizeMouseMove(callback, countdown = 500, timeout = 200) {
  let acceptAt = 0;
  let resetAt = 0;
  let now;

  return function handleMouseMove(event) {
    now = Date.now();

    if (now > resetAt) {
      acceptAt = now + countdown;
    }

    resetAt = now + timeout;

    if (now > acceptAt) {
      callback(event);
    }
  };
}

module.exports = desensitizeMouseMove;
