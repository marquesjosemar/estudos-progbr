const pessoa = {
    nome: "João",
    idade: 25,
    
    //agora vem o método 
    saudacao: function() {
      console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
  };
  
  //chamada do método
  pessoa.saudacao();