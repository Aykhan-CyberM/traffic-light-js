function startTrafficSignal () {
    var red=document.querySelector(".red");
    var yellow=document.querySelector(".yellow");
    var green=document.querySelector(".green");

    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },0);

    green.style.opacity=1;
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },10000);

    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },12000);

  
}

startTrafficSignal()

setInterval(startTrafficSignal,27000)