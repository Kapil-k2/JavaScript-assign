const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */
let src="";
let val="";
function mySrc(val){
    console.log(val);
    src="images/pic"+val+".jpg";
    displayedImage.setAttribute("src",src);
}
for (i = 1; i < 6; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", "./images/pic" + i + ".jpg");
  newImage.setAttribute("onclick",`mySrc(${i})`);
  thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  let attri = btn.getAttribute("class");
  if (attri == "dark") {
    btn.setAttribute("class", "light");
    btn.innerHTML = "Lighten";
    overlay.setAttribute("style","background-color:rgba(0,0,0,0.5)");
  }
  else if (attri != "dark") {
    btn.setAttribute("class", "dark");
    btn.innerHTML = "Darken";
    overlay.setAttribute("style","background-color:rgba(0,0,0,0)");
  }
});
