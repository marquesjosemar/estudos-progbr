

  function aguardarTempo(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  async function exemploAguardar() {

    console.log('Iniciando...')
    
    await aguardarTempo(2000) // Espera por 2 segundos
    
    console.log('Passaram 2 segundos!')
  }
  
  exemploAguardar();