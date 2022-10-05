import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = document.querySelector('.form');
ref.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const stepValue = Number(ref.step.value);
  const amountValue = Number(ref.amount.value);
  let delay = Number(ref.delay.value);

  for (let i = 0; i < amountValue; i += 1) {
    const position = i + 1;

    createPromise(position, delay)
      .then(resolve => Notify.success(resolve))
      .catch(reject => Notify.failure(reject));

    delay += stepValue;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}
