window.onscroll = function() {myFunction()};




//pour le background du menu en scrollant
function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("head").className = "scrolled";
  } else {
    document.getElementById("head").className = "";
  }
}





