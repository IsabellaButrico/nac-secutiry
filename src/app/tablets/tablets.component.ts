import { Component, OnInit } from '@angular/core';
import { Tablet }from './tablet/tablet.model'
import { TabletService } from './tablets.service'
@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {

  tablets: Tablet[]
  
  constructor(private tabletService: TabletService) { }

  ngOnInit() {
    this.tablets = this.tabletService.tablet();
  }

}
