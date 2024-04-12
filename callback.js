/* callback é uma função que é passada como argumento para outra função e é executada apos a conclusão dessa função */


let usuarios = ["adriano", "marcio", "josé"];

function inserirUsuario(nome, callback){
    setTimeout(()=>{
        usuarios.push(nome);
        callback();
    }, 1000)
}

function listarUsuarios(){
    console.log(usuarios)

}

inserirUsuario("igor", listarUsuarios);




//funcao que simula uma tarefa assincrona(ex. uma requisição de rede)

function tarefaAssincrona(callback){
    console.log('tarefa assincrona em andamento...');

    setTimeout(function(){
        console.log('tarefa assincrona concluida!')
        callback(); //aqui chamamos o callback
    }, 2000); //simulando um atraso de 2 segundos

}

//funcao de callback que sera executada apos a tarefa assincrona

function minhaFuncaoCallback() {
    console.log('o callback foi chamado!estou fazendo algo diferente agora!')   
}


//chamando a função que realiza a tarefa assincrona e passando a função de callback

tarefaAssincrona(minhaFuncaoCallback);
console.log('continuando com outras tarefas...')