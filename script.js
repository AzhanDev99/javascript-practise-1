var timer = 60;
var hitval = 0;
var score = 0;





function increasescore (){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
};

function hitvalue (){
    hitval = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitval; 
};

function bottomnumber (){
    var clutter = "";

    for ( var i=1 ; i<=102 ; i++ ){
        var ramdomnumber = Math.floor(Math.random()*10)
        clutter += `<div class="number">${ramdomnumber}</div>`
    }
    
    document.querySelector(".session-bottom").innerHTML = clutter ;
};


function timercount(){
    setInterval(
        function () {
            if(timer>0){
                timer--;
                document.querySelector("#Timer").textContent = timer;
            }
            else{
                clearInterval(timer);
                document.querySelector(".session-bottom").innerHTML = `<h1>Game over ${score}<h1/>`;
            }
    }, 1000);
};

document.querySelector(".session-bottom").addEventListener("click" , function (dets){
   var clickdnumber = (Number(dets.target.textContent)); 
    if (clickdnumber === hitval){
        increasescore();
        hitvalue();
        bottomnumber();
    }

});




bottomnumber();
timercount();
hitvalue();

    
