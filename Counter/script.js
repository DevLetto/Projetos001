// var txt = document.getElementById('numero').textContent
// var num = Number(txt)

// function reset() {
//     txt.innerHtm = "0"
// }

// function increase() {
//     txt.innerHTML =  "abroba"
    
// } 


// function decrease() {

//     if (num == 0) {
//         window.alert('Nao volta mais n')
//     } else {
//         txt.innerHtml = num - 1
//     }
// }


function reset() {
    document.getElementById("numero").textContent = "0"; 
    document.getElementById("numero").style.color = "black"; 

}

function increase() {
    let numeroElemento = document.getElementById("numero"); 
    let num = Number(numeroElemento.textContent); 
    let cor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    numeroElemento.textContent = num + 1; 
    numeroElemento.style.color = cor
    // document.body.style.backgroundColor = cor
    let som = new Audio('font/mob-beep.mp3' )
    som.play()          

        
    
    
}

function decrease() {
    let numeroElemento = document.getElementById("numero"); 
    let num = Number(numeroElemento.textContent);

    if (num == 0) {
        window.alert('Não volta mais não!');
    } else {
        let cor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
        numeroElemento.textContent = num - 1;
        numeroElemento.style.color = cor 
    }
}