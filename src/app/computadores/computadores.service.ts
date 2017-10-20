import { Computador } from './computador/computador.model'
export class ComputadoresService{
    

    comps: Computador[] = [
        {
          id: '1',
          nome: 'Computador Intel',
          marca: 'Intel',
          informacao: 'Intel Core i5 3.10ghz \n 8gb...',
          preco: '1.479,00',
          imagePath: '../../assets/img/pcIntel.jpg'
        },
        {
          id: '2',
          nome: 'Computador All in one',
          marca: 'LG',
          informacao: '22V270 Intel Quad Core - 4GB 500GB 21,5” Windows 10',
          preco: '1.719,57',
          imagePath: '../../assets/img/all.jpg'
        },
        {
          id: '3',
          nome: 'Computador pichau',
          marca: 'Pichau',
          informacao: 'i5-700, GTX 1050 TI.',
          preco: '2.662,22',
          imagePath: '../../assets/img/pichau.jpg'
        },
        {
          id: '4',
          nome: 'Micro computador',
          marca: 'Evus',
          informacao: 'modelo elementar 324',
          preco: '800,00',
          imagePath: '../../assets/img/evus.jpg'
        }
      ]
    

    computadores(): Computador[]{
        return this.comps;
    }

    constructor(){}
}