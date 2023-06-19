import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AllServicesComponent } from './services/all-services/all-services.component';
import { SingleServicesComponent } from './services/single-services/single-services.component';
import { AllProjectsComponent } from './projects/all-projects/all-projects.component';
import { SingleProjectsComponent } from './projects/single-projects/single-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    AllServicesComponent,
    SingleServicesComponent,
    AllProjectsComponent,
    SingleProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
