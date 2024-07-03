function updateTime() {
    const now = new Date();
    document.querySelector('[data-testid="currentTimeUTC"]').innerText = now.toUTCString();
}

function updateDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    document.querySelector('[data-testid="currentDay"]').innerText = days[now.getUTCDay()];
}

updateTime();
updateDay();
setInterval(updateTime, 1000);