const args = process.argv.slice(2);
const filteredArgs = args.map((arg) => parseInt(arg)).filter((arg) => 
{ return arg && arg >= 0 || arg["length"] && arg.length === 0 });


for (const time in filteredArgs) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, filteredArgs[time] * 1000)
};


// for (let i = 0; i < filteredArgs.length; i++) {
//   setTimeout(() => {
//     process.stdout.write('\x07');
// }, filteredArgs[i] * 1000)};