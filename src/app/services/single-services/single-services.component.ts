import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-single-services',
  templateUrl: './single-services.component.html',
  styleUrls: ['./single-services.component.css']
})
export class SingleServicesComponent implements OnInit {

  singleService:any;
  getid:any
  constructor(private api:ApiService,private activate:ActivatedRoute) { }

  ngOnInit(){

    this.activate.params.subscribe((res:any)=>{
      console.log(res);
      this.getid = res?.id;
      console.log(this.getid) 
      })  
      
      this.getSingleService()
  }

  getSingleService(){
    this.api.getSingleService(this.getid).subscribe((res:any) =>{
      console.log(res)
      this.singleService = res.data
    })
  }
}
