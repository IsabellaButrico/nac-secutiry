import { Jogo } from './jogo/jogo.model'

export class JogosService{

    jogs: Jogo[] = [
        {
          id: "1",
          nome: "Need For Speed Underground 2",
          categoria: "Corrida",
          plataforma: "Computador, playstation 2",
          preco: "10,00",
          imagePath: "../../assets/img/nfsu2.jpg"
        },
        {
          id: "2",
          nome: "Ace Combat 6",
          categoria: "Avião",
          plataforma: "Playstation 4",
          preco: "30,00",
          imagePath: "../../assets/img/ace7.jpg"  
        },
        {
          id: "3",
          nome: "Path of Elixir",
          categoria: "MMORPG",
          plataforma: "Computador",
          preco: "00,00",
          imagePath: "../../assets/img/path.jpg"  
        },
        {
          id: "4",
          nome: "Grand Chase",
          categoria: "MMORPG",
          plataforma: "Computador",
          preco: "00,00",
          imagePath: "../../assets/img/grandchase.jpg"  
        }
      ]
    


    jogos(): Jogo[]{
        return this.jogs;
    }
}