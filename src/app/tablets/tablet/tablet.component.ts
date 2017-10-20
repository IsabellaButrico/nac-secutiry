import { Component, OnInit, Input } from '@angular/core';
import { Tablet } from './tablet.model';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['../../app.component.css']
})
export class TabletComponent implements OnInit {

  @Input() tablet: Tablet
  constructor() { }

  ngOnInit() {
  }

}
