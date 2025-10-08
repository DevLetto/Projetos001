let texto = document.getElementById('text')
let list = document.querySelector('.list')

var itens = JSON.parse(localStorage.getItem("itens")) || []


//carrega oq ta no LocalStorage na lista

function loadItens(){

    for(let i = 0; i < itens.length ; i++){
        list.appendChild(criarItem(itens[i]))
    }



}

//add o item na lista e tbm no localStorage

function adicionar(){

    if(texto.value == ""){
        window.alert("Insira um valor")

    }else{
        
        list.appendChild(criarItem(texto.value))
        itens.push(texto.value)
        localStorage.setItem("itens", JSON.stringify(itens))
        texto.value = ""
        
    }
}

//função para criar o item

function criarItem(conteudo){

    var p = document.createElement("p")
    var excluir = document.createElement("button")
    var simbolo = document.createElement("span")
    var listitem = document.createElement("div")

    excluir.classList.add("excluir")
    simbolo.classList.add('material-symbols-outlined')
    simbolo.textContent= "delete"
    excluir.appendChild(simbolo)

    listitem.classList.add("listitem")
    

    p.textContent = `-${conteudo}`

    p.classList.add('item')
    listitem.appendChild(p)
    listitem.appendChild(excluir)
    
    
    p.onclick = function(){
        p.classList.toggle('feito');


    }

    excluir.onclick = function(){
        list.removeChild(listitem)

        //pedi pro chatgtp fazer essa parte 

        // pega o texto do item sem o hífen
        let valor = p.textContent.slice(1) 

        // encontra o índice no array
        let indice = itens.indexOf(valor)

        if(indice > -1) {
          itens.splice(indice, 1)  // remove do array
          localStorage.setItem("itens", JSON.stringify(itens)) // atualiza o storage
        }
        
    }

    return listitem
}


//usar o enter pra clicar

function verificarTecla(event){
    if(event.key === "Enter"){
        adicionar()
    }
}

//troca a cor de fundo


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

const mediaQuery = window.matchMedia("(min-width: 800px)");

mediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
        document.body.classList.remove("darkMode");
    }
});



