
function updateTimer(isoDate, timerInfo) {
  const date = new Date(isoDate);

  const timeTillDate = date - Date.now(); // returns in miliseconds

  const seconds = Math.floor(timeTillDate / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  timerInfo.hours = hours;
  timerInfo.minutes = minutes;
  timerInfo.seconds = seconds;

  return timerInfo;
}

const timerInfo = { hours: 0, minutes: 0, seconds: 0 }

console.log(updateTimer("2022-06-02T00:00:00.000-07:00", timerInfo))