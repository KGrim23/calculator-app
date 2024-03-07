
const display = document.getElementById("display")


function appendToDisplay(input){
    display.value += input;
}

function resetDisplay(){
    display.value = "";
}

function deleteDisplay(){
    display.value = display.value.toString().slice(0, -1)
}

function calculate(){
    if (!display.value){
        display.value = 0;
    }
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
    
}

