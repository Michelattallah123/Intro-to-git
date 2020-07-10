function random(number,range){
var arr = [];
while(arr.length < number){
    var r = Math.floor(Math.random() * range) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
return arr;
}
module.exports = random;
