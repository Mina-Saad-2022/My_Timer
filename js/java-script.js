var type = document.querySelector("#type"),
    start_timer = document.querySelector("#start"),
    stop_timer = document.querySelector("#stop"),
    time_out;

     function my_timer(){
        "use strict";

        if (type.textContent <= 0){
             type.textContent  = "GO";
             clearInterval(time_out);

        }
        else{
            type.textContent = type.textContent - 1
        }

    }
    stop_timer.onclick = function (){
        clearInterval(time_out)
    }

    var time_out = setInterval(my_timer, 1000);








