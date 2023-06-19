import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-single-services',
  templateUrl: './single-services.component.html',
  styleUrls: ['./single-services.component.css']
})
export class SingleServicesComponent implements OnInit {

  singleService:any;
  servicesList:any;
  getid:any
  constructor(private api:ApiService,private activate:ActivatedRoute,private spinner: NgxSpinnerService,) { }

  ngOnInit(){

    this.activate.params.subscribe((res:any)=>{
      console.log(res);
      this.getid = res?.id;
      console.log(this.getid)
      })

      this.getSingleService();
      this.getServiceList();
  }

  getSingleService(){
    this.spinner.show();
    this.api.getSingleService(this.getid).subscribe((res:any) =>{


      if(res?.message == "Successfully Fetched Single Service Record!"){
        console.log(res)
        this.singleService = res.data
      }
      else{
        alert("Something went wrong!, refresh again")
      }
      this.spinner.hide();

    },
    (err)=>{
      alert("Something went wrong!, refresh again")
      this.spinner.hide();
    })
  }

  getServiceList(){
    this.spinner.show();
    this.api.getAllServicesList().subscribe((res:any) =>{
      console.log(res)
      this.servicesList = res.data
    })
    this.spinner.hide();
  }
}
