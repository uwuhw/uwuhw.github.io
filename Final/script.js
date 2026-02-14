document.addEventListener("DOMContentLoaded", function(){
    const envelope = document.getElementById("evnelope");
    const overlay = document.getElementById('popupOverlay');
    var index = 0;

    function openEnvelope(){
        if(index % 2 === 0){
            envelope.classList.add("open");
            envelope.classList.remove("close");
        } 
        else {
            overlay.style.display = 'flex';
        }
        index++;
    }

    envelope.addEventListener("click", openEnvelope);
});

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

let x = 0;

yesButton.addEventListener("click", function() {
    document.getElementById("popupPrompt").innerText = "嘿嘿 luv u bibi~😘";
    yesButton.style.fontSize = `${0}px`;
    yesButton.style.padding = `${0}px ${0}px`;
    noButton.style.fontSize = `${0}px`;
    noButton.style.padding = `${0}px ${0}px`;
    document.getElementById("gif").src = "https://media3.giphy.com/media/3o7TKz9bX9YKuKFWZW/giphy.gif";
});

noButton.addEventListener("click", function() {
    
    const changeText = document.querySelector("button");

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const randomX = Math.floor(Math.random() * (viewportWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - noButton.offsetHeight));

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize + 10}px`;
    yesButton.style.padding = `${currentSize / 10 + 10}px ${currentSize + 10}px`;
    
    const resp = ["U sure?", "Really sure??", "不是吧", "Last chance", "..."];
    const gif = ["https://media3.giphy.com/media/3o7TKz9bX9YKuKFWZW/giphy.gif", "https://media3.giphy.com/media/3o7TKz9bX9YKuKFWZW/giphy.gif", "https://media3.giphy.com/media/3o7TKz9bX9YKuKFWZW/giphy.gif", "https://media3.giphy.com/media/3o7TKz9bX9YKuKFWZW/giphy.gif", "https://media3.giphy.com/media/3o7TKz9bX9YKuKFWZW/giphy.gif"];

    x = x + 1;
    noButton.textContent = resp[x-1];
    document.getElementById("gif").src = gif[x-1];
    if (x >= 5) {
        noButton.parentElement.remove();
    }
});
