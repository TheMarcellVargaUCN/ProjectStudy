function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.onscroll = function(){onScrollChecks()};
let plane = document.getElementById('plane');
let car = document.getElementById('car');

function onScrollChecks(){
	//console.log(window.pageYOffset);
    if(window.pageYOffset < 1000){
       car.style.display = "block";
   }
	if(window.pageYOffset >= 1000){
        car.style.display = "none";
	}
    if(window.pageYOffset > 1000){
       plane.style.display = "block";
   }
	if(window.pageYOffset <= 1000){
        plane.style.display = "none";
	}

    if(window.pageYOffset > 2630){
       plane.style.display = "none";
   }

 }

// let ans1 = document.getElementsById ("answer1");
// let ans2 = document.getElementsByClassName ("answer2");
// let ans3 = document.getElementsByClassName ("answer3");
// let ans4 = document.getElementsByClassName ("answer4");
// let ans5 = document.getElementsByClassName ("answer5");
// let ans6 = document.getElementsByClassName ("answer6");
// let ans7 = document.getElementsByClassName ("answer7");
// let ans8 = document.getElementsByClassName ("answer8");

function showAns1() {
    var x = document.getElementById("answer1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
         x.style.display = "none"; 
    }
}

function showAns2() {
    var x = document.getElementById("answer2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
         x.style.display = "none";
    }
}

function showAns3() {
    var x = document.getElementById("answer3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
         x.style.display = "none";
    }
}

function showAns4() {
    var x = document.getElementById("answer4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
         x.style.display = "none";
    }
}

function showAns5() {
    var x = document.getElementById("answer5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
         x.style.display = "none";
    }
}

function showAns6() {
    var x = document.getElementById("answer6");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
         x.style.display = "none";
    }
}

function showAns7() {
    var x = document.getElementById("answer7");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
         x.style.display = "none";
    }
}

function showAns8() {
    var x = document.getElementById("answer8");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
         x.style.display = "none";
    }
}
// function showAns1 (){
//     document.getElementById("answer1").classList.toggle("active");
// }


var acc = document.getElementsByClassName("faq_button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}