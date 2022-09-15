import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit, AfterViewInit {
@ViewChild('addBtn') addBtn:any;
  constructor(private formevent: FormEventService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(response=>{
      let value ='Video '+ count++
      console.log(value);
      this.formevent.print(value,'eleAppend');
      this.formevent.print(value,'eleAppend2');
    })

  }

}
