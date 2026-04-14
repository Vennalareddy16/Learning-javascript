const obj={
    id: 1,
    name: "guest",
    arr: [10,"hello",40.98,'hi']

}

console.log(obj.loc);

obj.loc="hyd";

console.log(obj);

console.log(obj.arr);

const user=[
    {
        id: 1,
        name: "user1",
        loc: "hyd"
    },
    {
        id: 2,
        name: "user2",
        loc:    "knr"
    },
]

console.log(user);
console.log(user[0]);
console.log(user[0].name);

//for of - arrays

for(const i of user)
{
    console.log(i)
}

//for in - objects
for (const key in user) {
    if (!Object.hasOwn(user, key)) continue;
    
    const element = user[key];
    console.log(element)
    
}

function myFun(){
    console.log(-1);
    //return -1;

}
//console.log(myFun);
console.log(myFun());

//addition of 2 numbers
function add(a,b){
    return a+b;
}
console.log(add(10,20))

function add(a,b){
    return a-b;
}
console.log(add(20,5))

//annonymous function
const myFun1=function(a,b){
    return a+b;
}
console.log(myFun1(40,'hi'));

//calculator using switch case and functions

function doMath(a,b,operator){
    switch(operator){
    case '+':
           console.log(doMath(10,20,'+'))
            break;
            
    case '-':console.log(doMath(20,10,'-'))
            break;

    case '*':
                console.log(doMath(20,10,'*'))
                break;
    case '/': 
                console.log(doMath(20,10,'/'));
                break;
    case '%':
                console.lob(doMath(20,10,'%'))
                break;
    default:
            console.log("Invalid Operator") 
            break;
    }
}