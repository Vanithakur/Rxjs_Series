import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor(private formevent: FormEventService) { }
  unsub: Subscription;
  unsub2: Subscription;
  colorDesign:any;  

  ngOnInit(): void {

    // Example - 01
    const Arr = ['Shivani','Nishi', 'Sonu', 'Roshni', 'Thakur', 'Karve', 'Bagdi', 'Tiwari'];

    const source = interval(1000);

    this.unsub = source.pipe(
      tap(data=>{
        if(data >= 8){
          this.unsub.unsubscribe();
        }
      }),
      map(data=> 
        Arr[data]
      )
      ).subscribe(res=>{
      // console.log(res);
      this.formevent.print(res, 'eleContainer');
    });
 
    // Example - 02

    const ArrColor = ['Blue','Yellow', 'Red', 'Orange', 'Black', 'purple', 'Brown', 'Green'];

    this.unsub2 = source.pipe(
      tap(data=>{
        if(data == 8){
          this.unsub2.unsubscribe();
        }
      }),
      map(data=> 
        ArrColor[data]
      )
      ).subscribe(res=>{
      console.log(res);
      this.colorDesign = res;
      this.formevent.print(res, 'eleContainer2');
    });
 


  }

}
