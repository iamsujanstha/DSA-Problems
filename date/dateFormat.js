const now = new Date();

const timeZone = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Kathmandu',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
})

console.log(timeZone.format(now))
console.log('now.toString()', now.toDateString())
console.log('date.getDate()', now.getDate())

now.setDate(now.getDate() - 7);
console.log(now.toDateString());
