import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit{
  @ViewChild('myInput') myInput:any;
  showData:any =null;
  @ViewChild('myInput2') myInput2:any;
  showData2:any =null;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    const searching_data = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(2000)
    );
    searching_data.subscribe(res=>{
      this.showData = res;
      console.log(res);
      setTimeout(()=>{
        this.showData = null
      },3000)
      
    });
    const searching_data2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(2000),
      distinctUntilChanged()
    );
    searching_data2.subscribe(res=>{
      this.showData2 = res;
      console.log(res);
      setTimeout(()=>{
        this.showData2 = null
      },3000)
      
    });
  }

}
