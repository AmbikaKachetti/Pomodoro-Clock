// variable
let workTitleElement = document.getElementById('work');
let breakTitleElement = document.getElementById('break');

let workTime = 25;
let breakTime = 15;

let seconds = "00";

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitleElement.classList.add('active');
}

// start timer
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;


    breakCount = 0;

    // countdown
    let timerFunction = () => {
        // change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start
        seconds = seconds - 1;
        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++;

                    // change the panel
                    workTitleElement.classList.remove('active');
                    breakTitleElement.classList.add('active');
                }
                else {
                    // continue break
                    workMinutes = workTime;
                    breakCount++;

                    // change the panel
                    breakTitleElement.classList.remove('active');
                    workTitleElement.classList.add('active');

                }
            }
            seconds = 59;
        }

    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
}