let texto = document.getElementById('text')
let list = document.querySelector('.list')

function adicionar(){

    if(texto.value == ""){
        window.alert("Insira um valor")

    }else{
        
        var p = document.createElement("p")
        var excluir = document.createElement("button")
        var simbolo = document.createElement("span")
        var listitem = document.createElement("div")

        excluir.classList.add("excluir")
        simbolo.classList.add('material-symbols-outlined')
        simbolo.textContent= "delete"
        excluir.appendChild(simbolo)

        listitem.classList.add("listitem")
        

        p.textContent = `-${texto.value}`

        p.classList.add('item')
        listitem.appendChild(p)
        listitem.appendChild(excluir)
        list.appendChild(listitem)
        texto.value = ""
        
        p.onclick = function(){
            p.classList.toggle('feito');


        }

        excluir.onclick = function(){
            list.removeChild(listitem)
            
        }

    }
}

function verificarTecla(event){
    if(event.key === "Enter"){
        adicionar()
    }
}




function colorMode(){
    


    document.body.classList.toggle('darkMode')

    let color = document.getElementById('color')
    let body = document.body
    let dark = document.createElement("span")
    let light = document.createElement("span")

    dark.classList.add("material-symbols-outlined")
    light.classList.add("material-symbols-outlined")

    dark.textContent = "dark_mode"
    light.textContent = "light_mode"
    color.innerHTML = ""

    console.log("chamou")
    console.log(body.classList)

    if(body.classList.contains('darkMode')){
        color.appendChild(light)
    } else{
        color.appendChild(dark)
    }


}

// let color = document.getElementById('color')

// color.addEventListener("onload", function(){
    
//     let body = document.body
//     let dark = document.createElement("span")
//     let light = document.createElement("span")

//     dark.classList.add("material-symbols-outlined")
//     light.classList.add("material-symbols-outlined")

//     dark.textContent = "dark_mode"
//     light.textContent = "light_mode"
//     color.innerHTML = ""

//     console.log("chamou")
//     console.log(body.classList)

//     if(body.classList.contains('darkMode')){
//         color.appendChild(light)
//     } else{
//         color.appendChild(dark)
//     }

// })

// function verificarTema(){
//     let body = document.body
//     let dark = document.createElement("span")
//     let light = document.createElement("span")

//     dark.classList.add("material-symbols-outlined")
//     light.classList.add("material-symbols-outlined")

//     dark.textContent = "dark_mode"
//     light.textContent = "light_mode"
//     color.innerHTML = ""

//     console.log("chamou")
//     console.log(body.classList)

//     if(body.classList.contains('darkMode')){
//         color.appendChild(light)
//     } else{
//         color.appendChild(dark)
//     }

// }

const mediaQuery = window.matchMedia("(min-width: 800px)");

mediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
        document.body.classList.remove("darkMode");
    }
});