import { Component, OnInit, Input } from '@angular/core';
import { Celular } from './celular.model'

@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['../../app.component.css']
})
export class CelularComponent implements OnInit {

  @Input() celular: Celular

  constructor() { }

  ngOnInit() {
  }

}
