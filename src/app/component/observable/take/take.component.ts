import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

randomNames = ['Shivani','Nishi', 'Sonu', 'Roshni', 'Thakur', 'Karve', 'Bagdi', 'Tiwari'];

  constructor(private formevent: FormEventService) { }

  ngOnInit(): void {
   const nameSource = from(this.randomNames);
    // Example - 01

    nameSource.pipe(
      take(4)
    )
    .subscribe(res=>{
      // console.log(res);
      this.formevent.print(res, 'eleContainer');
    });
    
    // Example - 02

    nameSource.pipe(
      takeLast(5)
    )
    .subscribe(res=>{
      // console.log(res);
      this.formevent.print(res, 'eleContainer2');
    });

     // Example - 03
    const source = interval(1000);
    let condition = timer(6000);
    let condition2 = fromEvent(document, 'click');
    source.pipe(
      map(data => 'Number '+ data),
      takeUntil(condition2)
    )
    .subscribe(res=>{
      console.log(res);
      this.formevent.print(res, 'eleContainer3');
    });


  }

}
