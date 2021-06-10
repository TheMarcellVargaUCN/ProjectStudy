/* ----------------------- Available Universities -------------------------- */

document.getElementById("defaultOpen").click();

function openUni(evt, uniName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("unicontainer");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(uniName).style.display = "grid";
  evt.currentTarget.className += " active";
}

/* ----------------------- Program container Panel  -------------------------- */

var acc = document.getElementsByClassName("panelbutton");
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
