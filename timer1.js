let alarms = process.argv.slice(2);
console.log(alarms)

for (alarm of alarms) {
  if (alarm > 0 && alarm !== NaN) {
    alarm *= 100
    setTimeout(() => {
      process.stdout.write('\x07')
    },alarm);
  }
}
