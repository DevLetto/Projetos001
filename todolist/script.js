function adicionar(){
    let texto = document.getElementById('text')
    let list = document.querySelector('.list')

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