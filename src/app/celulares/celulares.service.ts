import { Celular } from './celular/celular.model'

export class CelularesService{

    cels: Celular[] = [
        {
          id: "1",
          nome: "Iphone s6",
          detalhes: "",
          preco: "800,00",
          imagePath: "../../assets/img/iphone6.jpg"
        },
        {
          id: "2",
          nome: "Moto G",
          detalhes: "",
          preco: "750,00",
          imagePath: "../../assets/img/motog.jpg"  
        },
        {
          id: "3",
          nome: "Zenfone",
          detalhes: "",
          preco: "600,00",
          imagePath: "../../assets/img/zenfone.jpg"  
        },
        {
          id: "4",
          nome: "Lenovo Vibe K5",
          detalhes: "",
          preco: "900,00",
          imagePath: "../../assets/img/lenovo.jpg"  
        }
      ]


    celulares(): Celular[]{
        return this.cels;
    }

    constructor(){}
}