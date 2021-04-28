// Play Key Function
function play(samplename){
    var path = "Drum Samples/" + samplename + ".wav";
    var audio = new Audio(path);
    audio.play();
}
 document.addEventListener("keydown", function(e){
    var key = e.key;
    switch (key){
        case "q":
            var qKey = document.getElementById("qkey").getAttribute("value");
            play(qKey);
            break;
        case "w":
            var wKey = document.getElementById("wkey").getAttribute("value");
            play(wKey);
            break;
        case "e":
            var eKey = document.getElementById("ekey").getAttribute("value");
            play(eKey);
            break;
        case "r":
            var rKey = document.getElementById("rkey").getAttribute("value");
            play(rKey);
            break;
        case "u":
            var uKey = document.getElementById("ukey").getAttribute("value");
            play(uKey);
            break;
        case "i":
            var iKey = document.getElementById("ikey").getAttribute("value");
            play(iKey);
            break;
        case "o":
            var oKey = document.getElementById("okey").getAttribute("value");
            play(oKey);
            break;
        case "p":
            var pKey = document.getElementById("pkey").getAttribute("value");
            play(pKey);
            break;
        case "f":
            var fKey = document.getElementById("fkey").getAttribute("value");
            play(fKey);
            break;
        case "g":
            var gKey = document.getElementById("gkey").getAttribute("value");
            play(gKey);
            break;
        case "h":
            var hKey = document.getElementById("hkey").getAttribute("value");
            play(hKey);
            break;
        case "j":
            var jKey = document.getElementById("jkey").getAttribute("value");
            play(jKey);
            break;
        case " ":
            var spaceKey = document.getElementById("spacekey").getAttribute("value");
            play(spaceKey);
            break;
    }
 });

function setKeybinds(){
    var qKey = document.getElementById("qkey");

    var wKey = document.getElementById("wkey");

    var eKey = document.getElementById("ekey");

    var rKey = document.getElementById("rkey");

    var uKey = document.getElementById("ukey");

    var iKey = document.getElementById("ikey");

    var oKey = document.getElementById("okey");

    var pKey = document.getElementById("pkey");
}
