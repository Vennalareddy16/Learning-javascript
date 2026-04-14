let name="honey";
let age=22;

console.log("My ... name is "+ name +". she is "+age);
console.log(`My ... name is ${name}. she is ${age}`);

//DOM in JS

console.log(document)
console.log(document.body)

let buchi=document.getElementById("buchi");

//buchi.innerText="hello";

//buchi.innerText="<b>hello</b>";

//buchi.innerHTML="<b>hello</b>";

let Boxes=document.getElementsByClassName("box");

let b=document.getElementsByClassName("B");

Boxes.innerHTML="DOM in JS"

Boxes[1].innerHTML="DOM in JS"

b[0].innerHTML="<b>JAVA SCRIPT</b>"