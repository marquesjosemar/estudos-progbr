// criar um sistema que mostra:
// nome do aluno | nota 1 | nota 2 | média | aprovado ou não 

var nomes = ["igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB =[8.0, 7.0, 8.5];


// com os dados é preciso de uma function pra calcular a media e outra função pra calcular se foi aprovado ou não: 

function media(n1,n2){
    return (n1 + n2) /2;
}

function passou(media){
    if(media > 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}


//utiliza o laço de repetição for pra exibir as notas e nomes 

for (var index in nomes) {
    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1,nota2);

    console.log(nomes[index]+ 
        " - " + 
        notasA[index]+ 
        " - " + 
        notasB[index] + 
        " - "  +
        media(nota1, nota2)+
        " - "+
        passou(m));
}