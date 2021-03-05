import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  sideNavOptions = {
    mode: 'push',
    fixed: true,
    top: 72,
    bottom: 0,
    backdrop: 'false'
  }

  menuIcons = [
    {
      string: '',
      image: 'assets/img/actions/close.png',
      alt : 'close',
      title: 'Cierra menú',
      url:''
              
    },
    {
      string: '',
      image: 'assets/img/actions/menu.png',
      alt : 'menu',
      title: 'Abre menú',
      url:''
    },
    {
      string: 'Inicio',
      image: 'assets/img/actions/home.png',
      alt : 'home',
      title: 'Inicio',
      url: "/home"
    },
    {
      string: 'Explorar',
      image: 'assets/img/actions/explore.png',
      alt : 'explore',
      title: 'Explora nuevas tendencias',
      url: "/explore"
    },
    {
      string: 'Mi perfil',
      image: 'assets/img/actions/profile.png',
      alt : 'profile',
      title: 'Mi perfil',
      url: "/profile"
    },
    {
      string: 'Playlists',
      image: 'assets/img/actions/playlist.png',
      alt : 'playlists',
      title: 'Mira tus playlist guardadas',
      url: "/playlists"
    },
    {
      string: 'Álbumes',
      image: 'assets/img/actions/album.png',
      alt : 'albums',
      title: 'Mira tus álbums guardados',
      url: "/albums"
    },
    {
      string: 'Me gusta',
      image: 'assets/img/actions/love.png',
      alt : 'likes',
      title: 'Mira el contenido que te gusta',
      url:  "/likes"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
