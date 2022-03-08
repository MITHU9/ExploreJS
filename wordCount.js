var speech = "I am Mithu. I am a student. I am learning web development.";
var count = 0;
for(i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " "){
        count++;
    }
}
count++;
console.log(count);