import { Component, OnInit } from '@angular/core';
import { Celular } from './celular/celular.model';
import { CelularesService } from './celulares.service';
@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {

  celulares: Celular[]
  
  //injeção de depedencia
  constructor( private celularesService: CelularesService) { }

  ngOnInit() {
    this.celulares = this.celularesService.celulares(); 
  }

}
