var christmasDate = new Date("Dec 24, 2022 ").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = christmasDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days = String(days).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("christmas").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("christmas").innerHTML = "0 days";
    }
}, 1000);