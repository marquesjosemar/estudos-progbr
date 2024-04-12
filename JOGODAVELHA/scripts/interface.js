document.addEventListener('DOMContentLoaded',() => {

    let squares = document.querySelectorAll(".square");
    
    //para cada um dos elementos adicionar um evento de click // 
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);


    });

});

function handleClick(event) {
        
    //é o elemento que sofreu o evento/ação//
    let square = event.target;
    let position = square.id;

    if (handleMove(position)){ // a função handleMove está em game.js

        //intervalo de tempo pra mostrar o alert depois de aparecer o ultimo clique
        setTimeout( () => {
            alert("O jogo acabou - O vencedor foi o Jogador " + playerTime);    
        },10);
        
    };
    
    
    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position]

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
    
    
   
}

// REINICIAR JOGO
function reset() {
    window.location.reload();
} 


if (fimDeJogo() ) {
    alert ('Jogo empatou')
    
}