
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key == "b") {
    process.stdout.write('\x07')
  }
  if (key >= 1 && key <= 9) {setTimeout(() => {
    process.stdout.write('\x07');
  },key * 1000)
  console.log('Setting timer for ' + [key] + " seconds...");}

  if (key === '\u0003') {
    setTimeout(() => {
      process.stdout.write(process.exit());
    },1000);
    console.log(" Thanks for using me, ciao");

  }
});

