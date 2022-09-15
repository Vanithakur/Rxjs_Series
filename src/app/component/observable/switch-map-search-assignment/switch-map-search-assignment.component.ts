import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, from, map, pluck, toArray } from 'rxjs';
import { SearchService } from 'src/app/Service/searchdata.service';

@Component({
  selector: 'app-switch-map-search-assignment',
  templateUrl: './switch-map-search-assignment.component.html',
  styleUrls: ['./switch-map-search-assignment.component.css']
})
export class SwitchMapSearchAssignmentComponent implements OnInit, AfterViewInit {
@ViewChild('searchForm') searchForm: NgForm
  constructor( private searchService: SearchService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const data = from(this.searchService.getData());
    data.pipe(
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      
    })

    const formvalue = this.searchForm.valueChanges;
    formvalue.pipe(
      pluck('searchTerm'),
      debounceTime(5000),
      distinctUntilChanged()
    )
    .subscribe(res => {
      console.log(res);
      
    })
  }

}
