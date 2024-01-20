var icon = document.getElementById("icon");
var btn = document.getElementById("myBtn");
var fs = document.getElementsByClassName("fas");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun-icon.png";
    btn.classList.add("myBtn1");
    fs.classList.add("fas1");
  }
  else {
    icon.src = "moon-icon.png";
    btn.classList.remove("myBtn1");
    fs.classList.remove("fas1");
  }
  // Smooth scroll back to the top

}

const navigation =
document.querySelector(".primary-navigation");
const navigationheight = 
navigation.offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationheight + "px"
  
);