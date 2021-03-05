import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input() menu : any[];

  options = [
    {
      string: 'Estadísticas',
      url: '/data'
    },
    {
      string: 'Configuración',
      url: '/config'
    },
    {
      string: 'Sobre nosotros',
      url: '/about'
    },
    {
      string: 'Cerrar sesión',
      url: '/exit'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
