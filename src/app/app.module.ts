import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { CityFilterPipe } from './city-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoveroverDirective } from './hoverover.directive';

import { DropdownDirective } from './dropdown.directive';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PreviewComponent } from './signup/preview/preview.component';
import {HttpClientModule} from '@angular/common/http';
import { RoutGurdService } from './services/rout-gurd.service.ts.service';
import { CanDeactivateService } from './services/can-deactivate.service';
import { AdminComponent } from './admin/admin.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    CityFilterPipe,
    HoveroverDirective,
    AdminComponent,
    DropdownDirective,
    SigninComponent,
    SignupComponent,
    PreviewComponent,
    DialogOverviewExampleDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
   
  ],
  providers: [RoutGurdService,CanDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
