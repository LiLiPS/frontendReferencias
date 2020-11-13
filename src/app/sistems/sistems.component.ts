import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sistems',
  templateUrl: './sistems.component.html',
  styleUrls: ['./sistems.component.scss']
})
export class SistemsComponent implements OnInit {
  @Input() nameSistem;

  constructor() { }

  ngOnInit() {
  }

}
