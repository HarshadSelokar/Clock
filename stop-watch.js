let stopwatchTime = 0;
let stopwatchInterval;
let isRunning = false;

function startStopwatch() {
    if (isRunning) return;
    isRunning = true;
    stopwatchInterval = setInterval(updateStopwatchDisplay, 1000);
}

function updateStopwatchDisplay() {
    stopwatchTime++;
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    document.getElementById('stopwatchDisplay').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    isRunning = false;
    document.getElementById('stopwatchDisplay').textContent = "00:00:00";
}
