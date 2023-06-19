import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-single-projects',
  templateUrl: './single-projects.component.html',
  styleUrls: ['./single-projects.component.css']
})
export class SingleProjectsComponent implements OnInit {


  singleProject:any;
  getid:any
  constructor(private api:ApiService,private activate:ActivatedRoute, private spinner: NgxSpinnerService,) { }

  ngOnInit(){

    this.activate.params.subscribe((res:any)=>{
      console.log(res);
      this.getid = res?.id;
      console.log(this.getid)
      })

      this.getSingleProject();
  }

  getSingleProject(){
    this.spinner.show();
    this.api.getSingleProject(this.getid).subscribe((res:any) =>{
      if(res?.message == "Successfully Fetched Single Product Record!"){
        console.log(res)
        this.singleProject = res.data
      }
      else{
        alert("Something went wrong!, refresh again")
      }
      this.spinner.hide();

    },
    (err)=>{
      alert("Something went wrong!, refresh again")
      this.spinner.hide();
    }
    )
  }

}
