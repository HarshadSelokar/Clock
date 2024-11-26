function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const isAm = hours < 12;
    const amPm = isAm ? 'AM' : 'PM';
    
    hours = hours % 12 || 12;
    
    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${amPm}`;
    document.getElementById('time').textContent = timeString;
    
    const dateString = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();
