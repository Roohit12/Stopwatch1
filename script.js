var start= document.getElementById("start");
var stop= document.getElementById("stop");
var reset=document.getElementById("reset");

// adding click eventlistener on each button
start.addEventListener('click',function(){
    timer=true;
    startCounter();
    
})
// adding click eventlistener on each button
stop.addEventListener('click',function(){
    timer=false;
    
})
// adding click eventlistener on each button
//reseting the values to zero
reset.addEventListener('click',function(){
    timer=false;

    counterHour=0;
    counterMinute=0;
    counterSecond=0;

  
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
   
    
})

// it shows that no interval is present or started
let timer = null;
let counterHour=0;
let counterMinute=0;
let counterSecond=0;


// create a function for the StopWatch
function startCounter(){
    //truthy
    if(timer){

        counterSecond++;
        //if secondss get equal to 60 it'll increase the minute by one and set seconds to zero 
        if(counterSecond==60){
            counterMinute++;
            counterSecond=0;
        }
        //if minutes get equal to 60 it'll increase the hours by one and set minutes to zero 

        if(counterMinute==60){
            counterHour++;
            counterMinute=0;
            counterSecond=0;
        }
        let hrString = counterHour;
        let minString = counterMinute;
        let secString = counterSecond;
        
        // if hour is less than 10 add a 0 prior to hours for future use
        if (counterHour < 10) {
            hrString = "0" + hrString;
        }
        // if minute is less than 10 add a 0 prior to hours for future use
        if (counterMinute < 10) {
            minString = "0" + minString;
        }
        // if second is less than 10 add a 0 prior to hours for future use
        if (counterSecond < 10) {
            secString = "0" + secString;
        }

        document.getElementById('hour').innerHTML = hrString;
        document.getElementById('minute').innerHTML = minString;
        document.getElementById('second').innerHTML = secString;
        //using settimeout  as recurring function to call stopwatch again and again until timer goes false 
        setTimeout(startCounter,1000);
        
    }
   


}


