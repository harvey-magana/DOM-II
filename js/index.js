// Your code goes here
let headerLogo = document.querySelector('.logo-heading');
let nav = document.querySelectorAll('.nav');

let heroImg = document.querySelector('.intro img');

let headerP = document.querySelector('.intro p');
let letters = Array.from(headerP.textContent);

let contentSection = document.querySelector('.content-section');
let contentText = document.querySelector('.content-section .text-content');
let contentImg = document.querySelector('.content-section .img-content');

let inverseContent = document.querySelector('.inverse-content');
let inverseText = document.querySelector('.inverse-section .text-content');
let inverseImg= document.querySelector('.inverse-section .img-content');

let bottomImg = document.querySelector('.content-destination img');
let destinations = document.querySelectorAll('.destination');

window.addEventListener('load', () => {
    if(event.target === 'load') {
        headerLogo.style.color = "yellow";
    } else {
        headerLogo.style.color = "green";
    }
})

document.addEventListener('keydown', () => {
    headerP.style.color = "yellow";
});

document.addEventListener('keyup', () => {
    headerP.style.color = "";
});

heroImg.addEventListener('mouseover', () => {
    heroImg.style.border = "3px solid pink";
})

heroImg.addEventListener('mouseout', () => {
    heroImg.style.border = "";
})

window.addEventListener('scroll', function() {
    inverseContent.lastElementChild.firstElementChild.textContent = window.pageXOffset + 'px';
});

(function() {
    var taskItems = document.querySelectorAll(".nav");
  
    for ( var i = 0, len = taskItems.length; i < len; i++ ) {
      var taskItem = taskItems[i];
      contextMenuListener(taskItem);
    }
    function contextMenuListener(el) {
      el.addEventListener( "contextmenu", function(e) {
        console.log(e, el);
      });
    }
  })();

destinations[1].lastElementChild.addEventListener('click', () => {
    destinations[1].lastElementChild.textContent = 'Nevermind...';
});

bottomImg.addEventListener('dblclick', () => {
    if (event.type === 'dblclick') {
        bottomImg.style.transform = "scaleX(-1)"; 
    } 
})