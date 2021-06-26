function hideMe() {
    var box = document.getElementById("popup");
    box.style.display = "none";
}

function load() {
    alert("Loading weather report...");
}

classTemps = [".today-high", ".today-low", ".tomorrow-high", ".tomorrow-low", 
".friday-high", ".friday-low", ".saturday-high", ".saturday-low"];

var fahrenheit;
var valF;
var valC2F;

var celsius;
var valC;
var valF2C;

var counter = 0;

function tempSwitch() {
    if (counter === 0) {
        for (var i = 0; i < classTemps.length; i++) {
            fahrenheit = document.querySelector(classTemps[i]);
            valF = fahrenheit.innerText;
            valFParse = parseInt(valF);
        
            valC2F = Math.round( (valFParse * 9) / 5  + 32);
            document.querySelector(classTemps[i]).innerText = valC2F;
        }
        counter = 1;

    }  else  {
        for (var x = 0; x < classTemps.length; x++) {
            celsius = document.querySelector(classTemps[x]);
            valC = celsius.innerText;
            valCParse = parseInt(valC);
        
            valF2C = Math.round( (valCParse - 32) * 5 / 9);
            document.querySelector(classTemps[x]).innerText = valF2C;
        } 
        counter = 0;
    }  
}
 
