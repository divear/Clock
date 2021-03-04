
let speed = 1000




setInterval(SetTimer, speed);



function SetTimer(){
    
    let Clock = parseInt(document.getElementById("Clock").innerHTML)
    Clock++
    console.log(Clock)
    

    if(Clock == 60){
        Clock -= 60;
        let Minutes = parseInt(document.getElementById("Minutes").innerHTML);
        Minutes++;
        document.getElementById("Minutes").innerHTML = Minutes ;

        if(Minutes === 60){
            Minutes - Minutes;
            let Hours = parseInt(document.getElementById("Hours").innerHTML);
            Hours++;
            document.getElementById("Hours").innerHTML = Hours;

            if(Hours == 24){
                Hours -= 24;
                let Days = parseInt(document.getElementById("Days").innerHTML);
                Days++;
                document.getElementById("Days").innerHTML = Days;

                if(Days == 30){
                    Days-=30;
                    let Months = parseInt(document.getElementById("Months").innerHTML);
                    Months++;
                    document.getElementById("Months").innerHTML = Days;
        
        
                }
    
    
            }


        }
    }
    document.getElementById("Clock").innerHTML = Clock;
}
