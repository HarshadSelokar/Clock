let timer;
let totalTime = 0;

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    
    totalTime = minutes * 60 + seconds;
    if (totalTime <= 0) return;

    clearInterval(timer);
    timer = setInterval(updateTimerDisplay, 1000);
}

function updateTimerDisplay() {
    if (totalTime <= 0) {
        clearInterval(timer);
        document.getElementById('timerDisplay').textContent = "00:00";
        alert("Time's up!");
        return;
    }
    
    totalTime--;
    const mins = Math.floor(totalTime / 60);
    const secs = totalTime % 60;
    document.getElementById('timerDisplay').textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById('timerDisplay').textContent = "00:00";
    document.getElementById('minutes').value = "";
    document.getElementById('seconds').value = "";
    totalTime = 0;
}
