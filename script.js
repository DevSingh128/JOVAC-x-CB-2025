var xyz = function xyz()
{

}
console.log(xyz);
console.log(xyz);


//functions

setTimeout(()=>{
    console.log("print after 2 secs");
},2000);

setInterval(()=>{
    console.log("print everytime after 2 secs");
},2000)


for(var i=0; i<10; i++){
    console.log(i); //for loop
}

for(var i=0; i<10; i++){
    setTimeout(function(){
        console.log(i);
    }, 2000);
} //solve by closure


//EVENT LISTENERS
document.getElementById("functionCall").addEventListener("click",function abc(){
    console.log("EVENT HAPPENED!!")
})