import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();

  sidebarToggler(){
    this.toggleSideBar.emit();

  }

}
