import { Component, OnInit } from '@angular/core';
import { Produto } from './produto/produto.model';
import { ProdutosService } from './produtos.service'
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[]
  

  //injeção de dependencia
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtos = this.produtosService.produtos()
  }

}
