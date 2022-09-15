import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor() { }
 users = [
  {
    name: 'Shivani', 
    skills: 'Angular, Php',
    job: {
      title: 'software engineer',
      exp: '1 year'
    }
  },
  {
    name: 'Nishi',
    skills: 'Python, java',
    job: {
      title: 'Full Stack',
      exp: '10 year'
    }
  },
  {
    name: 'Sonu',
    skills: 'C, Html, Css',
    job: {
      title: 'Frontend Developer',
      exp: '11 year'
    }
  }
 ];
 data:any;
 data2:any;

  ngOnInit(): void {

    // Example - 01

    from(this.users)
    .pipe(
      // map(data=> data.name),
      pluck('name'),
    toArray())
    .subscribe(res=>{
      // console.log(res);
      this.data = res;
    });

    // Example - 02

    from(this.users)
    .pipe(
      // map(data=> data.name),
      pluck('job', 'title'),
    toArray())
    .subscribe(res=>{
      // console.log(res);
      this.data2 = res;
    });
  }

}
