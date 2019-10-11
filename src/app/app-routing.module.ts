import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

import { AdminComponent } from './admin/admin.component';
import { DownappComponent } from './downapp/downapp.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'security',component:SecurityComponent},
  {path:'services',component:ServicesComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'download',component:DownappComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
