import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  allProjects:any = [];

  constructor(private api:ApiService, private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.getAllProjects()
  }

  getAllProjects(){
    this.spinner.show();
    this.api.getAllProjects().subscribe((res:any) =>{
      console.log(res)
      this.allProjects = res?.data
      this.spinner.hide();
    })

  }

}
