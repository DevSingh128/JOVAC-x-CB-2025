//high order function
const doubleData = function (data) {
return data*data;
}
const calculate = function (data, logic){
let output = [];
for (let i=0;i<data.length;i++){
output.push(logic (data[i]));
}
return output;
}
const data1 = [8,4,2,6,1]
console.log(calculate (data1, doubleData));

//map function 

const arr = [1,2,3,4]
function double(x) {
return x*2
}
function triple(x){
return x*3
}
const output = arr.map(double);
console.log(output);
const output1 = arr.map(triple);
console.log(output1);


//filter function
const arr2 = [2,3,4,5,6,7,8]
function isEven(x){
return x%2
}
const output2 = arr2.filter(isEven);
console.log(output);