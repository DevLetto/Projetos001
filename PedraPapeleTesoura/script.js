// pedra = 0
// papel = 1
// tesoura = 2
var cScore = document.getElementById('computer-score')
var pScore = document.getElementById('player-score')
var score = 0;

var result = document.getElementById('result-text')


function pedra(){
    
        let robo = Math.floor(Math.random() * 3);

        if(robo == 1){
            score++;
            cScore.textContent = score
            result.textContent = "Voce perdeu"

        }else if(robo == 2){
            score++;
            pScore.textContent = score
            result.textContent = "Voce ganhou!"

        }else{
            result.textContent ="Empatou!"
        }
}

function papel(){
    let robo = Math.floor(Math.random() * 3);

        if(robo == 1){
            score++;
            cScore.textContent = score
            result.textContent = "Voce perdeu"

        }else if(robo == 2){
            score++;
            pScore.textContent = score
            result.textContent = "Voce ganhou!"

        }else{
            result.textContent ="Empatou!"
        }

}

function tesoura(){
    let robo = Math.floor(Math.random() * 3);

        if(robo == 1){
            score++;
            cScore.textContent = score
            result.textContent = "Voce perdeu"

        }else if(robo == 2){
            score++;
            pScore.textContent = score
            result.textContent = "Voce ganhou!"

        }else{
            result.textContent ="Empatou!"
        }
}