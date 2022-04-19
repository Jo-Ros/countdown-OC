const countdown = () => {
    const countDate = new Date("August 3, 2022 00:00:00").getTime();
    const currentDate = new Date().getTime();
    
    const gap = countDate - currentDate;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayDisplay = Math.floor(gap / day);
    const hourDisplay = Math.floor((gap % day) / hour); // check later
    const minuteDisplay = Math.floor((gap % hour) / minute);
    const secondDisplay = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = dayDisplay;
    document.querySelector('.hour').innerText = hourDisplay;
    document.querySelector('.minute').innerText = minuteDisplay;
    document.querySelector('.second').innerText = secondDisplay;
}

setInterval(countdown, 0);

// Cursor Set Up ============================================
const mouseCursor = document.querySelector('.cursor');
const title = document.querySelector('.title');
const timeContainers = document.querySelectorAll('.container');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

timeContainers.forEach(item => {
    item.addEventListener('mouseover', () => {
        mouseCursor.classList.add('mouse-hover-state');
    });
    item.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('mouse-hover-state');
    });
})

