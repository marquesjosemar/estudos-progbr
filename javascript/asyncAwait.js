let usuarios = ["adriano","marcio", "josé"];

function inserirUsuario(nome) {

    let promise = new Promise(function(resolve,reject) {
        setTimeout(() => {
           usuarios.push(nome);
           let error = false;
           
           if (!error){
            resolve();
           } else {
            reject(({msg:"erro de qualquer coisa"}))
           }
        },1000);
    })
    return promise;
}

function listarUsuarios(){
    console.log(usuarios);
}

async function executar() {
    await inserirUsuario("igor")
    listarUsuarios();
}

executar();



  


  //TERCEIRO EXEMPLO

  function primeiraFuncao(){

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("esperou isso aqui.")
            resolve()
        },2000)
    })
  }

  async function segundaFuncao() {
    
    console.log('iniciou')

        await primeiraFuncao();

    console.log('Terminou')

  }

  segundaFuncao();
