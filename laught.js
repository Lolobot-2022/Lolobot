window.onscroll = function() {myFunction()};




//pour le background du menu en scrollant
function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("head").className = "scrolled";
  } else {
    document.getElementById("head").className = "";
  }
}


//Pour le loader
var myVar;

function myFunctionPage() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("wait").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}







