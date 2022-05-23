window.addEventListener('load', throwDice(), {once: true})

function throwDice(){
    let title = ""

    const rand1 = Math.round(Math.random() * 5) + 1
    const rand2 = Math.round(Math.random() * 5) + 1

    document.getElementsByClassName('img1')[0].src = `./images/dice${rand1}.png`
    document.getElementsByClassName('img2')[0].src = `./images/dice${rand2}.png`

    if(rand1 === rand2){
        title = "Draw"
    }else if(rand1 > rand2){
        title = "Player 1 Wins"
    }else if(rand2 > rand1){
        title = "Player 2 Wins"
    }
    document.getElementById('title').innerHTML = title
}