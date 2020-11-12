var minutes = 00;
var seconds = 00;
var min=document.getElementById("min");
var sec=document.getElementById("sec");
const play_btn = document.getElementById("play");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");
var Interval;

console.log(min, sec);

play_btn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

function startTimer(){
    seconds++;

    //두자리 숫자로 표현해주기 위한 if문들
    if(minutes < 9){
        min.innerHTML = "0" + minutes;
    }
    if(minutes > 9){
        min.innerHTML = minutes;
    }

    //min이 꽉 찰 경우 sec로 값을 넘겨주기 위한 if문
    if(min > 60){
        console.log("seconds");
        seconds++;
        sec.innerHTML = "0" + seconds;
        minutes = 0;
        min.innerHTML = "0" + 0;
    }

    //seconds가 9이상이면 앞에 0을 붙이지 않는 if문
    if(seconds > 9){
        sec.innerHTML = seconds;
    }
    if(seconds > 99){
        console.log("seconds");
        minutes++;
        sec.innerHTML = "00";
        seconds = 0;
    }

}

stop_btn.onclick = () => {
    clearInterval(Interval);
}

reset_btn.onclick = () => {
    clearInterval(Interval);
    minutes = 00;
    seconds = 00;
    min.innerHTML = "00";
    sec.innerHTML = "00";
}