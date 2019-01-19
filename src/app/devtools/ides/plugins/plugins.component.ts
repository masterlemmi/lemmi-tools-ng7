import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ide-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {

  @Input('ide')
  chosenIde = "All";

  constructor() { }

  ngOnInit() {
  }

}
