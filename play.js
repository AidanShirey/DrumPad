// Play Key Function
var path = "Drum Samples/Acoustic/";
var ipath = "Drum Icons/Acoustic/";

function setIcons(iconpath){
    var qKey = document.getElementById("qkey").getAttribute("value");
    document.getElementById("qkey").setAttribute("src", iconpath + qKey + ".png");
    
    var wKey = document.getElementById("wkey").getAttribute("value");
    document.getElementById("wkey").setAttribute("src", iconpath + wKey + ".png");
    
    var eKey = document.getElementById("ekey").getAttribute("value");
    document.getElementById("ekey").setAttribute("src", iconpath + eKey + ".png");
    
    var rKey = document.getElementById("rkey").getAttribute("value");
    document.getElementById("rkey").setAttribute("src", iconpath + rKey + ".png");

    var uKey = document.getElementById("ukey").getAttribute("value");
    document.getElementById("ukey").setAttribute("src", iconpath + uKey + ".png");

    var iKey = document.getElementById("ikey").getAttribute("value");
    document.getElementById("ikey").setAttribute("src", iconpath + iKey + ".png");

    var oKey = document.getElementById("okey").getAttribute("value");
    document.getElementById("okey").setAttribute("src", iconpath + oKey + ".png");

    var pKey = document.getElementById("pkey").getAttribute("value");
    document.getElementById("pkey").setAttribute("src", iconpath + pKey + ".png");

    var fKey = document.getElementById("fkey").getAttribute("value");
    document.getElementById("fkey").setAttribute("src", iconpath + fKey + ".png");
    
    var gKey = document.getElementById("gkey").getAttribute("value");
    document.getElementById("gkey").setAttribute("src", iconpath + gKey + ".png");
    
    var hKey = document.getElementById("hkey").getAttribute("value");
    document.getElementById("hkey").setAttribute("src", iconpath + hKey + ".png");
    
    var jKey = document.getElementById("jkey").getAttribute("value");
    document.getElementById("jkey").setAttribute("src", iconpath + jKey + ".png");

    var spaceKey = document.getElementById("spacekey").getAttribute("value");
    document.getElementById("spacekey").setAttribute("src", iconpath + spaceKey + ".png");
}
setIcons(ipath);

function play(samplename){
    var mPath = path + samplename + ".wav";
    var audio = new Audio(mPath);
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



function setKeybinds(kitname){
    path = "Drum Samples/" + kitname + "/";
    ipath = "Drum Icons/" + kitname + "/";
    setIcons(ipath);
}

