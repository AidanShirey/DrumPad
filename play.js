// Play Key Function
function play(samplename){
    var path = "Drum Samples/" + samplename + ".wav";
    var audio = new Audio(path);
    audio.play();
}