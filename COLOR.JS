let body = document.getElementById("body");


    let redd = document.getElementById("redd");
    redd.onclick = function() {red()}

    let bluee = document.getElementById("bluee");
    bluee.onclick = function() {blue()}

    let greenn = document.getElementById("greenn");
    greenn.onclick = function() {green()}

    let purplee = document.getElementById("purplee");
    purplee.onclick = function() {purple()}

    let blackk = document.getElementById("blackk");
    blackk.onclick = function() {black()}

    let chocolatt = document.getElementById("chocolatt");
    chocolatt.onclick = function() {chocolat()}


    
    function blue(){
        let bluee = document.getElementById("bluee");
        body.style.background = "blue";
        bluee.style.border = "2px solid white"
        greenn.style.border = "none"
        purplee.style.border = "none"
        redd.style.border = "none"
        blackk.style.border = "none"
        chocolatt.style.border = "none"

    }
    
    function purple(){
        let purplee = document.getElementById("purplee");
        body.style.background = "#84869B";
        purplee.style.border = "2px solid white"
        greenn.style.border = "none"
        bluee.style.border = "none"
        redd.style.border = "none"
        blackk.style.border = "none"
        chocolatt.style.border = "none"
    }
    
    function green(){
        let green = document.getElementById("greenn");
        body.style.background = "#228E66";
        greenn.style.border = "2px solid white"
        purplee.style.border = "none"
        bluee.style.border = "none"
        redd.style.border = "none"
        blackk.style.border = "none"
        chocolatt.style.border = "none"
    }
    
    function red(){
        let redd = document.getElementById("redd");
        body.style.background = "red";
        redd.style.border = "2px solid white"
        greenn.style.border = "none"
        bluee.style.border = "none"
        green.style.border = "none"
        blackk.style.border = "none"
        chocolatt.style.border = "none"
       
    }

    function black(){
        let blackk = document.getElementById("blackk");
        body.style.background = "black";
        blackk.style.border = "2px solid white"
        chocolatt.style.border = "none"
        greenn.style.border = "none"
        purplee.style.border = "none"
        bluee.style.border = "none"
        green.style.border = "none"
    }

    function chocolat(){
        let chocolatt = document.getElementById("chocolatt");
        body.style.background = "palevioletred";
        chocolatt.style.border = "2px solid white"
        blackk.style.border = "none"
        greenn.style.border = "none"
        purplee.style.border = "none"
        bluee.style.border = "none"
        green.style.border = "none"
        
    }