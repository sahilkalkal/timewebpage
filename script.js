function clock(){
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var gt;
    if(hour >= 05 && hour <12){
        gt="Morning";
    }
    else if(hour >= 12 && hour <16){
        gt="Afternoon";
    }
    else if(hour >=16 && hour<20){
        gt= "Evening";
    }
    else {
        gt = "Night";
    }

    document.getElementById("hour").innerHTML= hour + ":" + minute;
    document.getElementById("greet").innerHTML= "Good " + gt + ", Sahil";
}

clock();
setInterval(clock,1000)