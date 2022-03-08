var marks = [45, 65, 74, 88, 97, 96, 87,94];
var max = marks[0]; 

for(var i = 0; i <= marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Height value is :", max);