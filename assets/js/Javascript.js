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