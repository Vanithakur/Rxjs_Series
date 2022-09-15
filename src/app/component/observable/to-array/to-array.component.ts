import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
sourceSub:any;
users:any = [
  {name: 'Shivani', skill: 'Angular'},
  {name: 'Nishi', skill: 'Android, Python'},
  {name: 'Sonu', skill: 'C, C++'}
]
  constructor() { }

  ngOnInit(): void {
    // Example - 1
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(10),
      toArray())
      .subscribe(res=>{
      // console.log(res);

      // if(res >= 10){
      //  this.sourceSub.unsubscribe();
      // }
    })
    // Example - 2
    const source2 = from(this.users);
    source2.pipe(
      toArray()
    )
    .subscribe(res=>{
      console.log(res);
    });
    // Example - 3
    const source3 = of('Shivani', 'Nishu', 'Sonu');
    source3.pipe(
      toArray()
    )
    .subscribe(res=>{
      console.log(res);
      
    })

  }

}
