var num = [2, 4, 3, 2, 6, 3, 7, 24, 12, 6, 7];
var uniqueNum = [];
for(var i = 0; i < num.length; i++){
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if(index == -1){
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);