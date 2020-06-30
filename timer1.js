let args = process.argv.slice(2);

args = args.sort((a, b) => {
  return Number(a) - Number(b);
});

for (const element of args) {
  if (element >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, element * 1000);
  }
}