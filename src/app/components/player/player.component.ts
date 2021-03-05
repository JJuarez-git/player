import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
@ViewChild("player-btns") btns :ElementRef;
  
  constructor(private renderer: Renderer2) { }
  
  addMyClass(){
    this.renderer.addClass(this.btns.nativeElement, 'active');
  }

  ngOnInit(): void {
  }

}
