let blocks = document.querySelectorAll('.blocks')[0].children;
let redBlock = document.querySelector('.block--red');
let blueBlock = document.querySelector('.block--blue');
let greenBlock = document.querySelector('.block--green');
let pinkBlock = document.querySelector('.block--pink');
let grayBlock = document.querySelector('.block--gray');


let blocksParent = document.querySelector('.blocks');
let blocksArr = Array.from(blocksParent.children);
let blocksArray = [redBlock, blueBlock, greenBlock, pinkBlock, grayBlock];


window.addEventListener('click', () => {
    for (let [i] of blocksArr.entries()) {
        if(event.target === blocksArr[i]) {
            console.log(blocksArr[i])
            blocksParent.prepend(blocksArr[i])
        }
    }
})

window.addEventListener('mousedown', () => {
    for (let [j] of blocksArr.entries()) {
        if(event.target === blocksArr[j] && event.type === 'mousedown') {
           blocksArr[j].style.position = "relative";
           blocksArr[j].style.cursor = "pointer";

           let start = Date.now();
           let timer = setInterval(function() {
             let timePassed = Date.now() - start;
             blocksArr[j].style.left = timePassed / 5 + 'px';
             if (timePassed > 9000) clearInterval(timer);
           }, 10);
            console.log("Hello")
        }
    }
})
