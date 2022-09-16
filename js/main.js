// import { DateTime } from './luxon.js'
import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import initializeClock from './timer.js'

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

var timeinterval = setInterval(1000);
let buttonRun = document.getElementById('start');
let buttonStop = document.getElementById('stop');  
var deadlineD = document.getElementById('days countdown-time');
var deadlineH = document.getElementById('hours countdown-time');
var deadlineM = document.getElementById('minutes countdown-time');
var deadlineS = document.getElementById('seconds countdown-time');
buttonRun.addEventListener('click', function() {
    var deadline="January 01 2018 00:00:00 GMT+0300";
    var deadline = new Date(Date.parse(new Date()) + deadlineD * deadlineH * deadlineM * deadlineS * 1000); // for endless timer
    initializeClock('countdown', deadline);
})

buttonStop.addEventListener('click', function() {
	clearInterval(timeinterval);
});