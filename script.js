var i = 0;
var txt = `Dear Mary,
I can't think of anyone else. I would want to have as mine...No one else gives me the tingles. The way you always do, So, will you be my valentine? So I can share this with you...On this day made just for lovers. So imma ask you again Mary Onesa Oruoghor, will you be my val?

`;
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


function showBut(){
  document.getElementById("butty").style.display = "inline-block";

}
setTimeout(showBut, 30000)

function myFunction() {
  location.replace("https://iamlimo.github.io/my-val/congrats.html")
}
