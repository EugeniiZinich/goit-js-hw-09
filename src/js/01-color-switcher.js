const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

const color = {
  timerId: null,

  randomColor() {
    this.timerId = setInterval(() => {
      const randomColor = getRandomHexColor();
      refs.startBtn.disabled = true;
      document.body.style.backgroundColor = randomColor;
    }, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    refs.startBtn.disabled = false;
  },
};

refs.startBtn.addEventListener('click', color.randomColor.bind(color));

refs.stopBtn.addEventListener('click', color.stop.bind(color));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
