function trimite(){
    var selectElement = document.getElementById("5-565");
    var selectElement2 = document.getElementById("clasa_de_toleranta");
    var d = selectElement.value;
    var c = selectElement2.value;
    if(d<=30){
        if(c == 'f')
            ab = "±0.1";
        if(c == 'm')
            ab = "±0.2"
        if(c == 'c')
            ab = "±0.5"
        if(c == 'v')
            ab = "±1"
    }
    else if(d > 30 && d <= 120){
        if(c == 'f')
            ab = "±0.15";
        if(c == 'm')
            ab = "±0.3"
        if(c == 'c')
            ab = "±0.8"
        if(c == 'v')
            ab = "±1.5"
    }
    else if(d > 120 && d <= 400){
        if(c == 'f')
            ab = "±0.2";
        if(c == 'm')
            ab = "±0.5"
        if(c == 'c')
            ab = "±1.2"
        if(c == 'v')
            ab = "±2.5"
    }
    else if(d > 120 && d <= 400){
        if(c == 'f')
            ab = "±0.2";
        if(c == 'm')
            ab = "±0.5"
        if(c == 'c')
            ab = "±1.2"
        if(c == 'v')
            ab = "±2.5"
    }
    else if(d > 400){
        if(c == 'f')
            ab = "±0.3";
        if(c == 'm')
            ab = "±0.8"
        if(c == 'c')
            ab = "±2"
        if(c == 'v')
            ab = "±4"
    }
    document.getElementById("raspuns").textContent = ab;
}