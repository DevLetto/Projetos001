function calcular(){
    const mat = parseFloat(document.getElementById('mat').value) || 0
    const hum = parseFloat(document.getElementById('huma').value) || 0
    const ling = parseFloat(document.getElementById('ling').value) || 0
    const nat = parseFloat(document.getElementById('natu').value) || 0
    const reda = parseFloat(document.getElementById('reda').value) || 0
    const nota = document.getElementById('nota')
    // const notNum = Number(nota.textContent)
    

    if(mat == 0 || hum == 0|| ling == 0 || nat == 0 || reda == 0){

        window.alert("Preencha todos os valores")

    } else {
        if(mat > 1000 || hum > 1000 || ling > 1000 || nat > 1000 || reda > 1000){
           
            window.alert("Algum valor esta acima do limite permitido")
        } else {
            const media = (mat + hum + ling + nat + reda) / 5
    
            nota.textContent = media.toFixed(2)


        }
    }
}