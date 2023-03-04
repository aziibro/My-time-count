document.addEventListener('DOMContentLoaded', () => {
  //Передаю значение
  const newDeveloper = new Date('Jun 8 2023');
  //Обращаюсь к каскаду
  const daysVal = document.querySelector('.time-count__days .time-count__val');
  const hoursVal = document.querySelector('.time-count__hours .time-count__val');
  const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
  const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

  const daysText = document.querySelector('.time-count__days .time-count__text');
  const hoursText = document.querySelector('.time-count__hours .time-count__text');
  const minutesText = document.querySelector('.time-count__minutes .time-count__text');
  const secondsText = document.querySelector('.time-count__seconds .time-count__text');

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  //Ищу текущее значение
  const timeCount = () => {
    let now = new Date ();
  //Осталось до
    let leftUntil = newDeveloper - now; //Получаю значение в миллисекундах

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60; 
    let seconds = Math.floor(leftUntil / 1000) % 60; 

    daysVal.textContent = days;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secondsVal.textContent = seconds;

    days.textContent = declOfNum(days, ['день', 'дня', 'дней']);
    days.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
    days.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
    days.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
  };
  //Вызов функции
  timeCount();

  setInterval(timeCount, 1000);
});
