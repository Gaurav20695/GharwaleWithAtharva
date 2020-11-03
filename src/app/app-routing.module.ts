import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { CanDeactivateService } from './services/can-deactivate.service';
import { RoutGurdService } from './services/rout-gurd.service.ts.service';
import { SigninComponent } from './signin/signin.component';
import { PreviewComponent } from './signup/preview/preview.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'', redirectTo : '/signin' , pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'gallery', component:GalleryComponent, canActivate:[RoutGurdService]},
  {path:'signin', component:SigninComponent}, 
  {path:'signup', component:SignupComponent, canDeactivate: [CanDeactivateService]},
  {path:'preview', component:PreviewComponent },
  {path:'admin', component:AdminComponent}
]

 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
