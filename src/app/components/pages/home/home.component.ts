import { Component, OnInit } from '@angular/core';
import { SpotyService } from '../../../services/spoty.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevosLanzamientos:any = [];
  imagenes:any = [];

  imagenitas = [
    {path: 'assets/img/kevin.jpg'},
    {path: 'assets/img/aitana.jpg'},
    {path: 'assets/img/trippie.jpg'},
    {path: 'assets/img/kevin.jpg'},
    {path: 'assets/img/aitana.jpg'},
    {path: 'assets/img/trippie.jpg'},
    {path: 'assets/img/kevin.jpg'},
    {path: 'assets/img/aitana.jpg'},
    {path: 'assets/img/trippie.jpg'},
    {path: 'assets/img/kevin.jpg'},
    {path: 'assets/img/aitana.jpg'},
    {path: 'assets/img/trippie.jpg'},
  ]

  constructor(private spoty:SpotyService) {
    this.spoty.getNewReleases().subscribe((data:any) => {
      this.nuevosLanzamientos = data.albums.items;

      console.log(this.nuevosLanzamientos);

      this.nuevosLanzamientos.forEach(element => {
        this.imagenes.push({path: element.images[0].url});
      });
      
    });
    console.log(this.imagenes);
    console.log(this.imagenitas);
   }

  ngOnInit(): void {
  }

}
