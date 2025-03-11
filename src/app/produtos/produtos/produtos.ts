export interface IProdutos {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProdutos{
  quantidade: number,
  
}

export const produtos: IProdutos[] =[
    {
        id: 1,
        descricao: 'Óculos de Sol Aviador',
        preco: 200.99,
        descricaoPreco: 'à vista',
        quantidadeEstoque: 10,
        imagem: "./assets/oculos-1.jpg" 
      },
      {
        id: 2,
        descricao: 'Óculos de Sol Wayfarer',
        preco: 249.99,
        descricaoPreco: 'à vista',
        quantidadeEstoque: 10,
        imagem: './assets/oculos-2.webp' 
      },
      {
        id: 3,
        descricao: 'Óculos de Grau Redondo',
        preco: 150.00,
        descricaoPreco: 'à vista',
        quantidadeEstoque: 10,
        imagem: "./assets/oculos-3.png" 
      },
      {
        id: 4,
        descricao: 'Óculos de Sol Preto',
        preco: 180.00,
        descricaoPreco: 'à vista',
        quantidadeEstoque: 10,
        imagem: './assets/oculos-4.png' 
      },
      {
        id: 5,
        descricao: 'Óculos de Sol Degradê',
        preco: 220.00,
        descricaoPreco: 'à vista',
        quantidadeEstoque: 10,
        imagem: './assets/oculos-5.webp' 
      },
      {
        id: 6,
        descricao: 'Óculos de Sol Redondo',
        preco: 199.00,
        descricaoPreco: 'à vista',
        quantidadeEstoque: 10,
        imagem: './assets/oculos-6.webp' 
      },
      {
        id: 7,
        descricao: 'Óculos de Sol Espelhado',
        preco: 250.00,
        descricaoPreco: 'à vista',
        quantidadeEstoque: 10,
        imagem: './assets/oculos-7.webp' 
      },
      {
        id: 8,
        descricao: 'Óculos de Grau Quadrado',
        preco: 120.00,
        descricaoPreco: 'à vista',
        quantidadeEstoque: 10,
        imagem: './assets/oculos-8.jpg' 
      },
      {
        id: 9,
        descricao: 'Óculos de Sol de Metal',
        preco: 270.00,
        descricaoPreco: 'à vista',
        quantidadeEstoque: 10,
        imagem: './assets/oculos-9.png' 
      },
      {
        id: 10,
        descricao: 'Óculos de Sol Lentes Grandes',
        preco: 300.00,
        descricaoPreco: 'à vista',
        quantidadeEstoque: 10,
        imagem: './assets/oculos-10.webp' 
      }
    ]