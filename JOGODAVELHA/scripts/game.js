// iniciar minhas variaveis
let board = ['','','','','','','','','']; // tabuleiro
let playerTime = 0; //vez do jogador
let symbols = ['o', 'x'];
let gameOver = false;



// o jogador fez o movimento, essa função ta sendo chamada em interface.js 
function handleMove(position) {
    
    if (gameOver){
        return;
    }

    if (board[position] =='') {
        board[position] = symbols[playerTime];


        gameOver = isWin(); //essa jogada foi vencedora? funcao está abaixo

        //trocando a vez do jogador
        if (gameOver == false) {
            
            
            if (playerTime == 0) {
                playerTime = 1;
                
            } else {
                playerTime = 0;
            }  
        }    
    }

    return gameOver;
}

//regras do jogo da velha //
function isWin() {
    
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ] //possibilidades de vitoria
    
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]; //array das possibilidades de vitória
        
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] && 
            board[pos1] != '') {
            return true;
        }   
        
    }

    return false;
}



/*Verifica se o tabuleiro está completamente preenchido, se estiver, significa que ninguém venceu a rodada*/

function fimDeJogo () {
        var preenchidos = 0;

        for(var i = 0; i < board.length; i++){
                if(board[i]	!= undefined){
                    preenchidos++;
                    return preenchidos == board.length;

                } 
                
            
        }    
           
}