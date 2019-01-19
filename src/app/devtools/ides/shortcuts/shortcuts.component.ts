import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ide-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.scss']
})
export class ShortcutsComponent implements OnInit {

  headers = ["Eclipse", "Intelliyyyy", "VsCode", "Description"]

  data: any[] = [
    {
      name: "Lem",
      desc: "in Excelsis deo balblabla",
      desc2: "in Excelsis deo balblabla",
      id: "tatae tal al al a"
    },{
      name: "Lem",
      desc: "in Excelsis deo balblabla",
      desc2: "in Excelsis deo balblabla",
      id: "tatae tal al al a"
    },{
      name: "Lem",
      desc: "in Excelsis deo balblabla",
      desc2: "in Excelsis deo balblabla",
      id: "tatae tal al al a"
    },{
      name: "Lem",
      desc: "in Excelsis deo balblabla",
      desc2: "in Excelsis deo balblabla",
      id: "tatae tal al al a"
    },
]

  constructor() { }

  ngOnInit() {
  }

  getKeys(obj: any): any[] {
    return Object.keys(obj);
  }
}