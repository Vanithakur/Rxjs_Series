import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(private formevent: FormEventService) { }

  ngOnInit(): void {
    const source:any = from(['Tech', 'Comedy', 'News']);

    // Example - 01 | Map
    source.pipe(map(data => this.getData(data)))
    .subscribe(res => {
      this.formevent.print(res, 'eleContainer')
    });

    // Example - 02 | MergeAll
    source.pipe(
      map(data => this.getData(data)),
      mergeAll()
    )
    .subscribe(res => {
      this.formevent.print(res, 'eleContainer2')
    });

    // Example - 03 | MergeMap
    source.pipe(
      mergeMap(data => this.getData(data))
    )
    .subscribe(res => {
      this.formevent.print(res, 'eleContainer3')
    });


  }
  getData(data){
    return of(data + " Video Uploaded");
  }
}
