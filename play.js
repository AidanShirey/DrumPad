var path = "Drum Samples/Acoustic/";
var ipath = "Drum Icons/Acoustic/";
// function setIcons(iconpath)
// Input Type: String | I.E. "Acoustic" or "Electric"
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

// function play(samplename)
// Input Type: String | I.E. "q_key"
function play(samplename){
    var mPath = path + samplename + ".wav";
    var audio = new Audio(mPath);
    audio.play();
}

// EventListener for animation changes on key down press
document.addEventListener("keydown", function(e){
    var key = e.key;
    switch (key){
        case "q":
            var qKey = document.getElementById("qkey").getAttribute("value");
            document.getElementById("qkey").setAttribute("src", ipath + qKey + "down.png");
            play(qKey);
            break;
        case "w":
            var wKey = document.getElementById("wkey").getAttribute("value");
            document.getElementById("wkey").setAttribute("src", ipath + wKey + "down.png");
            play(wKey);
            break;
        case "e":
            var eKey = document.getElementById("ekey").getAttribute("value");
            document.getElementById("ekey").setAttribute("src", ipath + eKey + "down.png");
            play(eKey);
            break;
        case "r":
            var rKey = document.getElementById("rkey").getAttribute("value");
            document.getElementById("rkey").setAttribute("src", ipath + rKey + "down.png");
            play(rKey);
            break;
        case "u":
            var uKey = document.getElementById("ukey").getAttribute("value");
            document.getElementById("ukey").setAttribute("src", ipath + uKey + "down.png");
            play(uKey);
            break;
        case "i":
            var iKey = document.getElementById("ikey").getAttribute("value");
            document.getElementById("ikey").setAttribute("src", ipath + iKey + "down.png");
            play(iKey);
            break;
        case "o":
            var oKey = document.getElementById("okey").getAttribute("value");
            document.getElementById("okey").setAttribute("src", ipath + oKey + "down.png");
            play(oKey);
            break;
        case "p":
            var pKey = document.getElementById("pkey").getAttribute("value");
            document.getElementById("pkey").setAttribute("src", ipath + pKey + "down.png");
            play(pKey);
            break;
        case "f":
            var fKey = document.getElementById("fkey").getAttribute("value");
            document.getElementById("fkey").setAttribute("src", ipath + fKey + "down.png");
            play(fKey);
            break;
        case "g":
            var gKey = document.getElementById("gkey").getAttribute("value");
            document.getElementById("gkey").setAttribute("src", ipath + gKey + "down.png");
            play(gKey);
            break;
        case "h":
            var hKey = document.getElementById("hkey").getAttribute("value");
            document.getElementById("hkey").setAttribute("src", ipath + hKey + "down.png");
            play(hKey);
            break;
        case "j":
            var jKey = document.getElementById("jkey").getAttribute("value");
            document.getElementById("jkey").setAttribute("src", ipath + jKey + "down.png");
            play(jKey);
            break;
        case " ":
            var spaceKey = document.getElementById("spacekey").getAttribute("value");
            document.getElementById("spacekey").setAttribute("src", ipath + spaceKey + "down.png");
            play(spaceKey);
            break;
    }
 });

 // EventListener for animation change on key up
document.addEventListener("keyup", function(e){
    var key = e.key;
    switch (key){
        case "q":
            var qKey = document.getElementById("qkey").getAttribute("value");
            document.getElementById("qkey").setAttribute("src", ipath + qKey + ".png");
            break;
        case "w":
            var wKey = document.getElementById("wkey").getAttribute("value");
            document.getElementById("wkey").setAttribute("src", ipath + wKey + ".png");
            break;
        case "e":
            var eKey = document.getElementById("ekey").getAttribute("value");
            document.getElementById("ekey").setAttribute("src", ipath + eKey + ".png");
            break;
        case "r":
            var rKey = document.getElementById("rkey").getAttribute("value");
            document.getElementById("rkey").setAttribute("src", ipath + rKey + ".png");
            break;
        case "u":
            var uKey = document.getElementById("ukey").getAttribute("value");
            document.getElementById("ukey").setAttribute("src", ipath + uKey + ".png");
            break;
        case "i":
            var iKey = document.getElementById("ikey").getAttribute("value");
            document.getElementById("ikey").setAttribute("src", ipath + iKey + ".png");
            break;
        case "o":
            var oKey = document.getElementById("okey").getAttribute("value");
            document.getElementById("okey").setAttribute("src", ipath + oKey + ".png");
            break;
        case "p":
            var pKey = document.getElementById("pkey").getAttribute("value");
            document.getElementById("pkey").setAttribute("src", ipath + pKey + ".png");
            break;
        case "f":
            var fKey = document.getElementById("fkey").getAttribute("value");
            document.getElementById("fkey").setAttribute("src", ipath + fKey + ".png");
            break;
        case "g":
            var gKey = document.getElementById("gkey").getAttribute("value");
            document.getElementById("gkey").setAttribute("src", ipath + gKey + ".png");
            break;
        case "h":
            var hKey = document.getElementById("hkey").getAttribute("value");
            document.getElementById("hkey").setAttribute("src", ipath + hKey + ".png");
            break;
        case "j":
            var jKey = document.getElementById("jkey").getAttribute("value");
            document.getElementById("jkey").setAttribute("src", ipath + jKey + ".png");
            break;
        case " ":
            var spaceKey = document.getElementById("spacekey").getAttribute("value");
            document.getElementById("spacekey").setAttribute("src", ipath + spaceKey + ".png");
            break;
    }
 });

// function setKeybinds(kitname)
// Input Type: String | I.E. "Acoustic" or "Electric"
function setKeybinds(kitname){
    path = "Drum Samples/" + kitname + "/";
    ipath = "Drum Icons/" + kitname + "/";
    setIcons(ipath);
}

