

const changeColor=()=>{
    let display=document.getElementById("display")
    let randomColor="#"
    let colorCodes=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    for(let i = 0;i < 6; i++){
        let randomNo=Math.floor(Math.random()*16)
        randomColor+=colorCodes[randomNo]
    }
    display.style.backgroundColor=randomColor;
}
changeColor()