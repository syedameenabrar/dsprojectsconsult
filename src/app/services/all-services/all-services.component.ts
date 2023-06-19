import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit {
  allServices:any = [];

  constructor(private api:ApiService, private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.getAllServices()
  }

  getAllServices(){
    this.spinner.show();
    this.api.getAllServices().subscribe((res:any) =>{
      console.log(res)
      this.spinner.hide();
      this.allServices = res?.data
    })
  }

}
