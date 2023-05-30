import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit {
  allServices:any = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getAllServices()
  }

  getAllServices(){
    this.api.getAllServices().subscribe((res:any) =>{
      console.log(res)
      this.allServices = res?.data
    })
  }

}
