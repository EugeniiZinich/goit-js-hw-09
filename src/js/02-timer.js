import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  myInput: document.querySelector('#datetime-picker'),
  startBtnRef: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtnRef.setAttribute('disabled', true);

let intervalID = null;
let dateSelected = null;

flatpickr(refs.myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateSelected = selectedDates[0].getTime();

    if (dateSelected <= Date.now()) {
      Notify.failure('Please choose a date in the future');
      refs.startBtnRef.setAttribute('disabled', true);
    } else {
      refs.startBtnRef.removeAttribute('disabled');
    }
  },
});

refs.startBtnRef.addEventListener('click', onStarClick);

function onStarClick() {
  intervalID = setInterval(() => {
    const delta = dateSelected - Date.now();
    const { days, hours, minutes, seconds } = convertMs(delta);
    refs.startBtnRef.setAttribute('disabled', true);
    updeteClockface({ days, hours, minutes, seconds });

    if (delta < 1000) {
      clearInterval(intervalID);
    }
  }, 1000);
}

function addLeadinZero(value) {
  return String(value).padStart(2, '0');
}

function updeteClockface({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadinZero(days);
  refs.hours.textContent = addLeadinZero(hours);
  refs.minutes.textContent = addLeadinZero(minutes);
  refs.seconds.textContent = addLeadinZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
