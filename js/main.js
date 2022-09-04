// import { DateTime } from './luxon.js'
import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import countdownTimer from './timer.js'

const form = document.getElementById("datecalc")


form.onsubmit = (event) => {
    event.preventDefault();
    // console.log('form', event.target)
    const formData = new FormData(event.target)

    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')

    if (!firstDate || !secondDate) {
        printError('Oooppppss -> put date')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)

        printResult(dateDiff)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // конечная дата, вводимая пользователем
    const deadline = document.getElementById("timer_text");

    const start = document.getElementById('start');
    const stop = document.getElementById('stop');

    // id таймера
    let timerId = null;

    start.addEventListener('click', function () {
        let i = 0;

        timerId = setInterval(countdownTimer, 1000);
    });

    stop.addEventListener('click', function () {
        clearInterval(timerId);
    });
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    //timerId = setInterval(countdownTimer, 1000);
});

