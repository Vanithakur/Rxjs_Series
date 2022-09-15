import { Component, OnInit } from '@angular/core';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor( private formevent: FormEventService ) { }

  ngOnInit(): void {
    const source:any = from(['Tech', 'Comedy', 'News']);

    // Example - 01 | Map
      source.pipe(map(data => this.getData(data)))
      .subscribe(res => {
        console.log(res);
        this.formevent.print(res, 'eleContainer')
      });

    // Example - 02 | SwitchAll
      source.pipe(
        map(data => this.getData(data)),
        switchAll()
        )
      .subscribe(res => {
        console.log(res);
        this.formevent.print(res, 'eleContainer2')
      });

    // Example - 03 | SwitchMap
      source.pipe(
        switchMap(data => this.getData(data)),
        )
      .subscribe(res => {
        console.log(res);
        this.formevent.print(res, 'eleContainer3')
      });

  }
  getData(data){
    return of(data + " Video Uploaded").pipe(delay(1000));
  }

}
