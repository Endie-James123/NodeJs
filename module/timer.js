function startTimer(start, stop) {
  let count = start;
  const timer = setInterval(() => {
    count++;
    if (count === stop) {
      clearInterval(timer);
    }
    console.log(count);
  }, 100);
  return timer;
}

console.log(startTimer(1, 5));
