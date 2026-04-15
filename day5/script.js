//Events

/*const myFun = ()=>{
    console.log("hello");
}*/

/*const myFun =()=>{
    let display=document.getElementById("display")
    display.innerHTML="Bye"
}*/

/*const myFun =()=>{

    let display=document.getElementById("display")
    display.innerHTML=display.innerHTML==="Hello"?"Bye": "Hello"
    //display.style.color=display.style.color==="red"?"blue":"red"
    display.style.color=display.style.color==="blue"?"red":"blue"
}*/
let isShow=true
const myFun=()=>{
    let display=document.getElementById("display1")
    //display.src=display.src==="https://tse4.mm.bing.net/th/id/OIP.snb9kp4dgDK_NgcKwdPfOwHaEo?pid=Api&P=0&h=180"?"https://tse2.mm.bing.net/th/id/OIP.G37tgeQqSNt7v2oPfj9ltQHaE7?pid=Api&P=0&h=180":"https://tse4.mm.bing.net/th/id/OIP.snb9kp4dgDK_NgcKwdPfOwHaEo?pid=Api&P=0&h=180"

    if(isShow){
        display.src="https://tse4.mm.bing.net/th/id/OIP.snb9kp4dgDK_NgcKwdPfOwHaEo?pid=Api&P=0&h=180";
        isShow=!isShow
    }else{
        display.src="https://tse2.mm.bing.net/th/id/OIP.G37tgeQqSNt7v2oPfj9ltQHaE7?pid=Api&P=0&h=180";
        isShow=!isShow
    }

}