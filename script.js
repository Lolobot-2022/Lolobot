
window.onscroll = function() {myFunction()};
const vid = document.getElementById("img"); 
const video = document.getElementById("vid1popup"); 
const vid1= document.getElementById("img");
let myvideo = document.querySelectorAll(".videoplay");
const btn = document.querySelector('.btn-svg8');



//pour retarder le lancement de la video principale de 100s
setTimeout(function() {
  document.getElementById("img")
}, 5000000);



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






//pour mettre en pause les autres videos
function pauseVideo() { 
  video.pause(); 
} 



function pauseVid1() {
    vid1.pause();
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



