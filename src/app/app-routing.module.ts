import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AllProjectsComponent } from './projects/all-projects/all-projects.component';
import { SingleProjectsComponent } from './projects/single-projects/single-projects.component';
import { AllServicesComponent } from './services/all-services/all-services.component';
import { SingleServicesComponent } from './services/single-services/single-services.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'allProjects',
    component: AllProjectsComponent
  },
  {
    path: 'singleProjects',
    component: SingleProjectsComponent
  },
  {
    path: 'allServices',
    component: AllServicesComponent
  },
  {
    path: 'singleServices/:id',
    component: SingleServicesComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
