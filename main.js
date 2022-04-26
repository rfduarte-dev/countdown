// Campos
const secondsEl = document.querySelector('#seconds')
const minutesEl = document.querySelector('#minutes')
const hoursEl = document.querySelector('#hours')
const daysEl = document.querySelector('#days')
const weeksEl = document.querySelector('#weeks')

//Variaveis do Form
const button = document.querySelector('.btn-input')
const newDate = document.querySelector('#new-date')
const newTitle = document.querySelector('#new-title')
const title = document.querySelector('#title')

//Data ano novo - inicial
const newYear = new Date('1 jan 2023')

button.addEventListener('click', function () {
  title.innerHTML = newTitle.value
  newYear = new Date(newDate.value)
})

// ------ Countdown New Year ------
function countdown() {
  const currentDate = new Date()

  const diffSecond = (newYear - currentDate) / 1000
  const second = Math.floor(diffSecond) % 60
  const minute = Math.floor(diffSecond / 60) % 60
  const hour = Math.floor(diffSecond / 3600) % 24
  const days = Math.floor(diffSecond / 3600 / 24)
  const weeks = Math.floor(diffSecond / 3600 / 24 / 7)

  secondsEl.innerHTML = formatTime(second)
  minutesEl.innerHTML = formatTime(minute)
  hoursEl.innerHTML = formatTime(hour)
  daysEl.innerHTML = days
  weeksEl.innerHTML = weeks
}
countdown()

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

countdown()
setInterval(countdown, 1000)
