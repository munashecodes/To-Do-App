import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListItemIcon, MatListModule } from '@angular/material/list';
import { InboxComponent } from './inbox/inbox.component';
import { TodayComponent } from './today/today.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    LayoutComponent,
    SideBarComponent,
    MenuComponent,
    InboxComponent,
    TodayComponent,
    UpcomingComponent,
    TopBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    AvatarModule,
    MatMenuModule,
    MatToolbar,
    MatSidenavModule,
    MatListModule,
    MatListItemIcon,
    MatIconModule,
    DialogModule,
    ConfirmPopupModule,
    ToastModule,
    OverlayPanelModule,
    ChipsModule ,
    CalendarModule,
    FormsModule,
    TagModule,
    DropdownModule,
    HttpClientModule
    
    
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
