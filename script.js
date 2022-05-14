const containerHearts = document.querySelector('.container-hearts');
const guess = document.querySelector('.input-guess');
const submit = document.querySelector('.submit-btn');
const form = document.querySelector('.form-guess');
const containerText = document.querySelector('.container-text');
const feedbackText = document.querySelector('.feedback-text');
const containerComment = document.querySelector('.container-comment');
const comment = document.querySelector('.comment');
const arrowUp = document.querySelector('.fa-arrow-up');
const arrowDown = document.querySelector('.fa-arrow-down');
const lastGuess = document.querySelector('.last-guess');

function createHeart() {
    let heart = document.createElement('i');
    heart.className = 'fa-solid fa-heart';
    return heart;
}


window.addEventListener('DOMContentLoaded', function(){
    
    containerHearts.appendChild(createHeart());
    containerHearts.appendChild(createHeart());
    containerHearts.appendChild(createHeart());
    containerHearts.appendChild(createHeart());
    containerHearts.appendChild(createHeart());
    feedbackText.textContent = `GOOD LUCK!`;
});

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let lifeCount = 5;

form.addEventListener('submit', function(e){
    e.preventDefault();
    feedbackText.textContent = ``;
    if(guess.value <= 0 || guess.value > 100){  
        alert("The Number is between 1 and 100!");
    }
    else if(guess.value == randomNumber){
        lastGuess.textContent = `${guess.value}`
        feedbackText.textContent = `CONGRATULATIONS!`
        arrowDown.className = 'fa-solid fa-arrow-down disabled'
        arrowUp.className = 'fa-solid fa-arrow-up disabled'

        const againBtn = document.createElement('button');
        againBtn.className = 'again-btn';
        againBtn.textContent = 'TRY AGAIN'
        containerComment.appendChild(againBtn);

        guess.setAttribute('disabled', 'disabled')
        againBtn.onclick = () => location.reload();
    }
    else if(guess.value > randomNumber){
        comment.textContent = `GUESS LOWER`
        lastGuess.textContent = `${guess.value}`
        arrowDown.className = 'fa-solid fa-arrow-down enabled'
        arrowUp.className = 'fa-solid fa-arrow-up disabled'
        loseLife()
        checkLife()
    }
    else if(guess.value < randomNumber){
        comment.textContent = `GUESS HIGHER`
        lastGuess.textContent = `${guess.value}`
        arrowDown.className = 'fa-solid fa-arrow-down disabled'
        arrowUp.className = 'fa-solid fa-arrow-up enabled'
        loseLife()
        checkLife()
    }
    form.reset();
})

function loseLife() {
    lifeCount -= 1;
    let heart = document.querySelector('.fa-heart');
    heart.parentElement.removeChild(heart)
}

function checkLife() {
    if(lifeCount === 0){
        arrowDown.className = 'fa-solid fa-arrow-down disabled'
        arrowUp.className = 'fa-solid fa-arrow-up disabled'
        comment.textContent = `TRY AGAIN`
        feedbackText.textContent =`YOU LOSE! The number was ${randomNumber}`

        const againBtn = document.createElement('button');
        againBtn.className = 'again-btn';
        againBtn.textContent = 'TRY AGAIN'
        containerComment.appendChild(againBtn);

        guess.setAttribute('disabled', 'disabled')
        againBtn.onclick = () => location.reload();
    }
}
