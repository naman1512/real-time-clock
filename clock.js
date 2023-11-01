let second = 0;
let minute= 0;
let hour = 0;
let hrs = 0; 
let min = 0; 
let sec = 0; 
let d = new Date ();


setInterval (
    function(){
        d = new Date ();
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minute/12);
      

        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";

        document.getElementById("hrs").innerHTML = d.getHours();
        document.getElementById("sec").innerHTML = d.getSeconds();
        document.getElementById("min").innerHTML = d.getMinutes();



    }, 1000
) 



