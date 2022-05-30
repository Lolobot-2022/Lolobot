
window.onscroll = function() {myFunctionOne(),myFunction()};
const vid = document.getElementById("img"); 
const vidDesktop = document.getElementById("img-desktop"); 
const video = document.getElementById("vid1popup"); 
let myvideo = document.querySelectorAll(".videoplay");
const btn = document.getElementById("btn-svg8");



//pour retarder le lancement de la video principale de 100s
setTimeout(function() {
  document.getElementById("img")
}, 5000000);





function myFunctionOne() {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("btn-svg8").style.display = "flex";
  } else {
    document.getElementById("btn-svg8").style.display = "none";
  }
}




//pour le background du menu en scrollant
function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("head").className = "scrolled";
  } else {
    document.getElementById("head").className = "";
  }
}





//pour mettre en pause la principale video
function pauseVid() { 
  vid.pause(); 
} 


function playVid() { 
  vid.play(); 
} 


function pausevidDesktop() { 
  vidDesktop.pause(); 
} 

function playvidDesktop() { 
  vidDesktop.play(); 
} 




//pour mettre en pause les autres videos
function pauseVideo() { 
  video.pause(); 
} 



//Pour arreter ou jouer le son du film principal
mute.onclick = function (){
if (vid.muted === true) {    
  vid.muted = false;
}
else {
  vid.muted = true;
}
  }



svg7.onclick = function (){
if (vidDesktop.muted === true) {    
  vidDesktop.muted = false;
}
else {
  vidDesktop.muted = true;
    }
 }
  



//pour arreter les videos avec la souris
for (var i=0;i< myvideo.length; i++ ) {
  myvideo[i].addEventListener("mouseover", function(){
    this.play();
  })

  myvideo[i].addEventListener("mouseleave", function(){
    this.load();
  })
}



btn.addEventListener('click', () => {

  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })

})



//Pour le loader
var myVar;

function myFunctionPage() {
  myVar = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("squelettum").style.display = "none";
  document.getElementById("myDiv").style.display = "flex";
  document.getElementById("myDiv-grid").style.display = "grid";
  document.getElementById("myDiv-card").style.display = "grid";
  document.getElementById("myDiv-footer").style.display = "grid";

}





