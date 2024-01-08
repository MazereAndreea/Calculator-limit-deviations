document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("5-565");
    for (var i = 5; i <= 565; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectElement.appendChild(option);
    }
    var selectElement2 = document.getElementById("clasa_de_toleranta");
    const clase = "fmcv";
    for(const char of clase){
        var option2 = document.createElement("option");
        option2.value = char;
        option2.text = char;
        selectElement2.appendChild(option2);
    }
    var raspuns = document.getElementById("raspuns");
    var ab;
    
});