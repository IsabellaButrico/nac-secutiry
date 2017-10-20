import { Component, OnInit, Input } from '@angular/core';
import { Jogo } from './jogo.model'

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['../../app.component.css']
})
export class JogoComponent implements OnInit {

  @Input() jogo: Jogo
  constructor() { }

  ngOnInit() {
  }

}
