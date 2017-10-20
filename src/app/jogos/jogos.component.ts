import { Component, OnInit } from '@angular/core';
import { Jogo } from "./jogo/jogo.model";
import {JogosService } from "./jogos.service"
@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos: Jogo[]

  constructor(private jogosService: JogosService) { }

  ngOnInit() {
    this.jogos = this.jogosService.jogos();
  }

}
