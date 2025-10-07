
function carregar(){

    let sec = document.getElementById('sec')
    
    for(let i = 0; i < 10; i++){
        const div = document.createElement('div')
        const divImg = document.createElement('div')
        const divText = document.createElement('div')
        div.appendChild(divImg)
        div.appendChild(divText)
        div.classList.add("videoLateral", `video${i}`)
        divImg.classList.add("videoLImagem")
        divText.classList.add("videoLText")
    
        sec.appendChild(div)
    }
    
}

function showBar(){
    let sidebar = document.getElementById('sideBar')
    sidebar.classList.add('sideBar')
}

function hideBar(){
    let sidebar = document.getElementById('sideBar')
    sidebar.classList.remove('sideBar')
}

