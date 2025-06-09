let area = document.querySelector('#spellArea')

let list = document.querySelectorAll('li')

let genButton = document.querySelector('#generateButton')

let resetBtn = document.querySelector('#resetButton')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor(){
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}


genButton.addEventListener('click', function(){
    let countdown = 3;
    area.textContent = countdown;
    area.style.backgroundColor = 'rgb(255, 255, 255)';

    let interval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            area.textContent = countdown;
        } else {
            clearInterval(interval);

            area.textContent = list[getRandomInt(0, list.length)].innerText;
            area.style.backgroundColor = getRandomColor();
        }
    }, 1000);
})
resetBtn.addEventListener('click', function(){
    area.textContent = '';

    area.style.backgroundColor = 'rgb(255, 255, 255)';
})