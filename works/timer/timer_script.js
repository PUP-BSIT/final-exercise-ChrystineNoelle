document.addEventListener("DOMContentLoaded", function () {
    let seconds = 0;
    let timerInterval;
    const timerElement = document.getElementById("timer");
    const startBtn = document.getElementById("start_btn");
    const pauseBtn = document.getElementById("pause_btn");
    const resumeBtn = document.getElementById("resume_btn");
    const stopBtn = document.getElementById("stop_btn");

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resumeBtn.addEventListener("click", resumeTimer);
    stopBtn.addEventListener("click", stopTimer);

    let timerRunning = false;
    let timerPaused = false;

    function startTimer() {
        clearInterval(timerInterval);
        seconds = 0;
        timerElement.textContent = seconds;
        timerInterval = setInterval(updateTimer, 1000);
        timerRunning = true;
        timerPaused = false;
    }

    function updateTimer() {
        seconds++;
        timerElement.textContent = seconds;
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        timerRunning = false;
        timerPaused = true;
    }

    function resumeTimer() {
        if (timerPaused) {
            timerInterval = setInterval(updateTimer, 1000);
            timerRunning = true;
            timerPaused = false;
        }
    }

    function stopTimer() {
        clearInterval(timerInterval);
        seconds = 0;
        timerElement.textContent = seconds;
        timerRunning = false;
        timerPaused = false;
    }
});
