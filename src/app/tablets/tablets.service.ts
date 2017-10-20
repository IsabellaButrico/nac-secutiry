import { Tablet } from './tablet/tablet.model'

export class TabletService {

    tabls: Tablet[] = [
        {
          id: '1',
          nome: 'Tablet Samsung Galaxy',
          marca: 'Samsung',
          descricao: '8GB Wi-Fi Tela 7" Android 4.4 Processador Quad Core 1.3GHz - Branco',
          preco: '453,59',
          imagePath: '../../assets/img/tabletGalaxy8gb.png'
        },
        {
          id: '2',
          nome: 'Tablet Samsung Galaxy',
          marca: 'Samsung',
          descricao: '8GB 9,6” Wi-Fi - Android 4.4 Proc. Quad Core Câm. 5MP + Frontal',
          preco: '742,14',
          imagePath: '../../assets/img/tabletQuadCore.jpg'
        },
        {
          id: '1',
          nome: 'Tablet Samsung Galaxy',
          marca: 'Samsung',
          descricao: '8GB Wi-Fi Tela 9.6" Android 4.4 Quad-Core - Preto',
          preco: '703,12',
          imagePath: '../../assets/img/tabletPreto.jpg'
        },
        {
          id: '1',
          nome: 'Tablet Dl I-Style',
          marca: 'I-Style',
          descricao: 'Tela De 7", 4gb, Câmera, Wi Fi ,Suporte À Modem 3g, Android 4.1- Branco',
          preco: '189,99',
          imagePath: '../../assets/img/tabletStyle.jpg'
        },
      ]

    tablet(): Tablet[]{
        return this.tabls;
    }
}