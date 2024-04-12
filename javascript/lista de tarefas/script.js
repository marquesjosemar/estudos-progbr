let tarefas = [];

function adicionarTarefa(texto) {
    // Implementação da função adicionarTarefa

    const tarefa = {
        id: gerarId(), // Exemplo: id gerado automaticamente
        texto: texto
      };
    
      tarefas.push(tarefa);
    
      atualizarListaTarefas();
  }

  function removerTarefa(id) {
    // Implementação da função removerTarefa

    const indice = tarefas.findIndex(tarefa => tarefa.id === id);

  if (indice !== -1) {
    tarefas.splice(indice, 1);
  }

  atualizarListaTarefas();
  
  }

  function atualizarListaTarefas() {
    const listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.innerHTML = '';
  
    tarefas.forEach(tarefa => {
      const itemTarefa = document.createElement('li');
      itemTarefa.textContent = tarefa.texto;
      listaTarefas.appendChild(itemTarefa);
    });
  }

  atualizarListaTarefas();

  const botaoAdicionar = document.getElementById('botao-adicionar');
botaoAdicionar.addEventListener('click', function() {
  const inputTarefa = document.getElementById('input-tarefa');
  const textoTarefa = inputTarefa.value;
  adicionarTarefa(textoTarefa);
  inputTarefa.value = ''; // Limpar o campo de entrada
});

const botaoRemover = document.getElementById('botao-remover');
botaoRemover.addEventListener('click', function() {
  const inputIdTarefa = document.getElementById('input-id-tarefa');
  const idTarefa = inputIdTarefa.value;
  removerTarefa(idTarefa);
  inputIdTarefa.value = ''; // Limpar o campo de entrada
});

  
