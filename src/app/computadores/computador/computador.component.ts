import { Component, OnInit, Input } from '@angular/core';
import { Computador } from './computador.model'
@Component({
  selector: 'app-computador',
  templateUrl: './computador.component.html',
  styleUrls: ['../../app.component.css']
})
export class ComputadorComponent implements OnInit {

@Input () computador: Computador
  
  constructor() { }

  ngOnInit() {
  }

}
