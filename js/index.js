// Your code goes here
let headerLogo = document.querySelector('.logo-heading');
let nav = document.querySelectorAll('.nav');
let navLink = document.querySelectorAll('.nav-link');

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

navLink[0].setAttribute('draggable', true);
navLink[0].setAttribute('ondragstart', "event.dataTransfer.setData('text/plain',null)");

let dragged;
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "nav-link") {
      event.target.style.background = "grey";
      event.target.style.margin = "0 1.6rem";
    }
  
  }, false);

  document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "nav-link") {
      event.target.style.background = "";
    }
  
  }, false);

  document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "nav-link") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  }, false);