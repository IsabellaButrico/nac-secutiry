import { Produto } from './produto/produto.model'

export class ProdutosService{
    
    prods: Produto[] = [
        {
          id: "1",
          nome: "Counter Strick Go",
          categoria: "Jogo",
          preco: "50,00",
          imagePath: "../../assets/img/csgo.jpg"
        },
        {
          id: "2",
          nome: "Tibia",
          categoria: "Jogo",
          preco: "30,00",
          imagePath: "../../assets/img/tibia.png"  
        },
        {
          id: "3",
          nome: "Iphone 7",
          categoria: "Celular",
          preco: "1.200,00",
          imagePath: "../../assets/img/iphone7.jpg"  
        },
        {
          id: "4",
          nome: "Playstation 4",
          categoria: "Video Games",
          preco: "1.200,00",
          imagePath: "../../assets/img/ps4.jpg"  
        }
      ]

    produtos(): Produto[]{
        return this.prods;
    }

    constructor(){}
}