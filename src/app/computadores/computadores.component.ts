import { Component, OnInit } from '@angular/core';
import { Computador } from './computador/computador.model';
import { ComputadoresService } from './computadores.service'
@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.css']
})
export class ComputadoresComponent implements OnInit {

  computadores: Computador[]

  constructor(private computadoresService: ComputadoresService) { }

  ngOnInit() {
    this.computadores = this.computadoresService.comps
  }

}
