let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start(){
    timer = true;
    stopwatch();
    
}

function stop(){
    timer = false;

}

function reset(){
    timer =false;
    hr = 0;
    sec = 0;
    min = 0;
    count = 0;


    document.querySelector("#hr").innerHTML="00"
    document.querySelector("#min").innerHTML="00"
    document.querySelector("#sec").innerHTML="00"
    document.querySelector("#count").innerHTML="00  "

    

}


function stopwatch(){

    if(timer == true){
        count += 1

        if(count == 100){
            count =0;
            sec=sec+1
        }
        if(sec == 60){
            min=min+1
            sec=0
        }
        if(min == 60){
            hr= hr+1
            min =0
            sec=0
        }

        let hrstring = hr
        let minstring = min
        let secstring = sec
        let countstring = count

        if(hr<10){
            hrstring= "0"+hrstring
        }
        if(min<10){
            minstring= "0"+minstring
        }
        if(sec<10){
            secstring= "0"+secstring
        }
        if(count<10){
            countstring="0"+ countstring
        }

        document.querySelector("#hr").innerHTML=hrstring
        document.querySelector("#min").innerHTML=minstring
        document.querySelector("#sec").innerHTML=secstring
        document.querySelector("#count").innerHTML=countstring
        setTimeout('stopwatch()' , 8)
    }

}