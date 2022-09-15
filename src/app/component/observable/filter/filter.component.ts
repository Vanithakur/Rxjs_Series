import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  dataArr = [
    {id: 1, name: 'Shivani Thakur', gender: 'Female'},
    {id: 2, name: 'Nishi Karve', gender: 'Female'},
    {id: 3, name: 'Sonu Bagdi', gender: 'Female'},
    {id: 4, name: 'Roshni Tiwari', gender: 'Female'},
    {id: 5, name: 'Shalu Dangi', gender: 'Female'},
    {id: 6, name: 'Amit sen', gender: 'Male'},
    {id: 7, name: 'Rahul sen', gender: 'Male'},
    {id: 8, name: 'Aman sen', gender: 'Male'},
  ];

  data:any;
  data2:any;
  data3:any;

  constructor() { }

  ngOnInit(): void {

      const source = from(this.dataArr);

      // Example - 01

      source.pipe(
        filter(member => member.name.length > 10),
        toArray()
      )
      .subscribe(res=>{
        console.log(res);
        this.data = res;
        
      });

         // Example - 02

         source.pipe(
          filter(member => member.gender == 'Female'),
          toArray()
        )
        .subscribe(res=>{
          console.log(res);
          this.data2 = res;
          
        });

           // Example - 03

           source.pipe(
            filter(member => member.id <= 4),
            toArray()
          )
          .subscribe(res=>{
            console.log(res);
            this.data3 = res;
            
          });

        

  }

}
