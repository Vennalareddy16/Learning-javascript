//datatypes

/*var a=10;
var a=20;
console.log(a);


let c=32;
c=40;
console.log(c);

const b=56;
console.log(b);*/


//Arrays

let userData=[10, "hello", 5.64, false, null]

for(let index=0;index<userData.length;index++)
{
    console.log(userData[index]);
    //console.log(typeof userData[index]);
}
console.log(userData);

userData.push(20);//it will add the element to the end of array
userData.pop();//it will remove the last element

userData.shift()// it will remove the first element
userData.unshift("java")// it will add the element at starting

console.log(userData);
//let arr=["hi" , 20 , 30 , null];

