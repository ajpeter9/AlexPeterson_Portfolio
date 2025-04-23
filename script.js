// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";

  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function changeview1() {
  document.getElementById("id1").style.display = "block";
  document.getElementById("id2").style.display = "none";
  document.getElementById("id3").style.display = "none";
}

function changeview2() {
  document.getElementById("id1").style.display = "none"
  document.getElementById("id2").style.display = "block";
  document.getElementById("id3").style.display = "none";
}

function changeview3() {
  document.getElementById("id1").style.display = "none"
  document.getElementById("id2").style.display = "none";
  document.getElementById("id3").style.display = "block";
}