import { Component, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';
import { FormEventService } from 'src/app/Service/formevent.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private formevent: FormEventService) { }

  ngOnInit(): void {
    const Techsource = interval(3000).pipe(map(data => 'Tech Video #'+ (data+1)),take(5));
    const Comedysource = interval(8000).pipe(map(data => 'Comedy Video #'+ (data+1)),take(10));
    const Newssource = interval(3500).pipe(map(data => 'News Video #'+ (data+1)),take(3));
     
    const finalObs = merge(Techsource, Comedysource, Newssource);
    finalObs.subscribe(res => {
      console.log(res);
      this.formevent.print(res, 'eleContainer');
    });


  }

}
