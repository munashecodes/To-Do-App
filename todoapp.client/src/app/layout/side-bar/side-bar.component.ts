import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { Priority } from '../../../proxy/enums/priority';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  @ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;
  sidebarVisible = true;
  sideBarOpen = true;
  taskmodal =false;
  priority = Priority;

  navItems: any []= []

  constructor(private route: Router, private confirmationService: ConfirmationService, private messageService: MessageService) {
    
  }

  ngOnInit() {


    this.navItems = [
      [
        {
          icon: 'pi pi-inbox',
          label: 'Inbox',
          link: this.route.navigate(['/inbox'])
        }
      ],
      [
        {
          icon: 'pi pi-calendar',
          label: 'Today',
          link: this.route.navigate(['/today'])
        }
      ],
      [
        {
          icon: 'pi pi-calendar-clock',
          label: 'Upcoming',
          link: this.route.navigate(['/upcoming'])
        }
      ]
    ];
      
  
      
  }



  createTask() {
    this.taskmodal = true;
  }

  sidebarToggler(){
    this.toggleSideBar.emit();

  }
  accept() {
    this.confirmPopup.accept();
}

reject() {
    this.confirmPopup.reject();
}
confirm(event: Event) {
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Save your current process?',
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
  });
}


}
