// Event Loop

console.log("1.program started");

process.nextTick(() => {
  console.log("2.process.nextTick()");
}, 100);

setTimeout(() => {
  console.log("3.set timeout()");
}, 100);

setImmediate(() => {
  console.log("4.set immediate()");
});

console.log("5.program ended");
