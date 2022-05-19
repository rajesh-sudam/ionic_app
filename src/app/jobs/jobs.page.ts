import { Component, OnInit } from '@angular/core';
import jobsfile from '../jobs/jobs.json';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  jobs=[]


  constructor() { }

  ngOnInit() {
   this.jobs= jobsfile;
   console.log(this.jobs);
  }

}
