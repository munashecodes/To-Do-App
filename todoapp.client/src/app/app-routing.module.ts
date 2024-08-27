import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { MenuComponent } from './layout/menu/menu.component';
import { InboxComponent } from './inbox/inbox.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  
  {
    path: 'get-started',
    component: GetStartedComponent
  }, 
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'upcoming',
        component: UpcomingComponent
      },
      {
        path: 'today',
        component: TodayComponent
      },
    ]
    
  },
  
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
