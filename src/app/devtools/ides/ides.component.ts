import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ides',
  templateUrl: './ides.component.html',
  styleUrls: ['./ides.component.scss']
})
export class IdesComponent implements OnInit {

  display: any= {plugins: false, shortcuts: true}
  chosenIDE = "All"

  constructor() { }

  ngOnInit() {
  }

  

  show(menu: any) {
    this.toggle(menu, this.menuList);
    this.chosenIDE = menu.filter;
    Object.keys(this.display).forEach (key => {
      if(key == menu.name){
        this.display[key] = true;
      } else {
        this.display[key] = false;
      }
    })
  }


  toggle(selectedMenu: any, menuList: any[]): void {

    if (!!!menuList)
      return;

    //turn off the rest 
    menuList.forEach(menu => {
      menu.selected = this.matches(menu, selectedMenu);

      //toggle submenus
      this.toggle(selectedMenu, menu.submenu);
    });
  }


  matches(menu1, menu2): boolean {
    return (menu1.name + menu1.filter === menu2.name + menu2.filter)
  }


  menuList: any[] = [
    {
      name: "shortcuts",
      filter: "",
      selected: true,
      
    },
    {
      name: "plugins",
      filter: "all",
      selected: false,
      submenu: [
        {
          name: "plugins",
          filter: "eclipse",
          selected: false,
        },
        {
          name: "plugins",
          filter: "intellij",
          selected: false,
        },
        {
          name: "plugins",
          filter: "vscode",
          selected: false,
        },
      ]
    },
  ]

}
