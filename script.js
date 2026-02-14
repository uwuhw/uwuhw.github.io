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
    document.getElementById("gif").src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHZvcmN2MXppOW1mdDVva3V3c2ZrbWdzM3g5NDAwd3BuMTB6djVhcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WKt1UDg6BRdL1Ftd0Q/giphy.gif";
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
    const gif = ["https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTA5Y3kybnd2ZDhmNDNyejE5YjlubzZseXd4ZDd5bzFtdXBneHYwcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pfuLJ5yGwgx0171RCu/giphy.gif","https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXlqb3UydmY5ajE5cHZjazJneDZkYXdobXp3ZGc4eGZ1MWRjcTZldyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kiYyI0hEMOItg08EXE/giphy.gif", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXVuZmlrNWE1ZHc1ZXhibmM2MXh6ZGVwMzBuMHB6dTZhNjEybDFqciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ODyNacJX65YlmqMKy/giphy.gif", "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHZoNTFnZjMyb255cDNleTUxOGRtYzhia3ZjeGpsbzY4cjg1MXprbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8PUP6BrOz2znYGCwIi/giphy.gif"];

    x = x + 1;
    noButton.textContent = resp[x-1];
    document.getElementById("gif").src = gif[x-1];
    if (x >= 5) {
        noButton.parentElement.remove();
    }
});
