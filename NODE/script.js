let soma = require("./soma")

let args = process.argv.slice(2);

let a = Number(args[1])
let b = Number(args[2])
let c = "";

// se o primeiro argumento depois do nome do arquivo for s, então executa a função soma. 
if (args[0] == 's') {
    c = soma(a,b)
    
} else if (args[0]== 'm') {
  c = mult(a,b)  
}




console.log(c)


/* primeiro foi criado a função
depois o args 0 no if, significa que é o primeiro paramentro depois do arquivo no node, e assim sucessivamente.  */