import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

  }

  getAllServices(){
   return this.http.get(`https://ds-project-dev.onrender.com/service`)
  }

  getAllProjects(){
   return this.http.get(`https://ds-project-dev.onrender.com/product`)
  }

  getAllServicesList(){
   return this.http.get(`https://ds-project-dev.onrender.com/category`)
  }

  getSingleService(id:any){
    return this.http.get(`https://ds-project-dev.onrender.com/service/${id}`)
  }

  getSingleProject(id:any){
    return this.http.get(`https://ds-project-dev.onrender.com/product/${id}`)
  }
}



