const display = window.document.getElementById("disp");

function addElement(input){

    display.value += input

}

function clearDisplay(){
    
    display.value = ""

}

function calculate(){

    try {
        display.value = eval(display.value)

    }catch(error){
        display.value = "error"
    }
   

}