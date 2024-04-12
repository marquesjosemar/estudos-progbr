// Função para buscar posts da API JSONPlaceholder
async function buscarPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      
      // Exibir os títulos dos posts no console
      posts.forEach(post => {
        console.log(post.title);
      });
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }
  
  // Chamar a função para buscar posts
  buscarPosts();
  