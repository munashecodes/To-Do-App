import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  
  sideBarOpen = true;

  ngOnInit(){

    
      
  }
  sidebarto(){
    this.sideBarOpen = !this.sideBarOpen
  }
}


