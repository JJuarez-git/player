import { Component, OnInit } from '@angular/core';
import { SpotyService } from '../../services/spoty.service';

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.css']
})
export class CoversComponent implements OnInit {

  p:number = 1;
  nuevosLanzamientos:any = [];

  constructor(private spoty:SpotyService) { 
    this.spoty.getNewReleases().subscribe((data:any) => {
      this.nuevosLanzamientos = data.albums.items;
    });
  }

  ngOnInit(): void {
  }

}
