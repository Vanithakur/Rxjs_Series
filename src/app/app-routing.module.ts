import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DebounceTimeComponent } from "./component/debounce-time/debounce-time.component";
import { HomeComponent } from "./component/home/home.component";
import { ConcatComponent } from "./component/observable/concat/concat.component";
import { CustomObservableComponent } from "./component/observable/custom-observable/custom-observable.component";
import { FilterComponent } from "./component/observable/filter/filter.component";
import { FormEventComponent } from "./component/observable/form-event/form-event.component";
import { IntervalComponent } from "./component/observable/interval/interval.component";
import { ListComponent } from "./component/observable/list/list.component";
import { MapComponent } from "./component/observable/map/map.component";
import { MergeMapComponent } from "./component/observable/merge-map/merge-map.component";
import { MergeComponent } from "./component/observable/merge/merge.component";
import { ObservableComponent } from "./component/observable/observable.component";
import { OfFromComponent } from "./component/observable/of-from/of-from.component";
import { PluckComponent } from "./component/observable/pluck/pluck.component";
import { SwitchMapSearchAssignmentComponent } from "./component/observable/switch-map-search-assignment/switch-map-search-assignment.component";
import { SwitchMapComponent } from "./component/observable/switch-map/switch-map.component";
import { TakeComponent } from "./component/observable/take/take.component";
import { TapComponent } from "./component/observable/tap/tap.component";
import { ToArrayComponent } from "./component/observable/to-array/to-array.component";
import { ReplaySubjectComponent } from "./component/replay-subject/replay-subject.component";
import { AsyncAwaitComponent } from "./component/series/async-await/async-await.component";
import { PromisesComponent } from "./component/series/promises/promises.component";
import { SeriesComponent } from "./component/series/series.component";


const routes: Routes = [
{path:'', component:HomeComponent},
{path:'series', component:SeriesComponent},
{path:'observable', component:ObservableComponent, children:[
    {path:'', component:ListComponent},
    {path:'form-event', component:FormEventComponent},
    {path:'interval-time', component:IntervalComponent},
    {path:'of-from', component:OfFromComponent},
    {path:'toarray', component:ToArrayComponent},
    {path:'custom-observable', component:CustomObservableComponent},
    {path:'map', component:MapComponent},
    {path:'pluck', component:PluckComponent},
    {path:'filter', component:FilterComponent},
    {path:'tap', component:TapComponent},
    {path:'take', component:TakeComponent},
    {path:'concat', component:ConcatComponent},
    {path:'merge', component:MergeComponent},
    {path:'replay-subject', component:ReplaySubjectComponent},
    {path:'debounce-time', component:DebounceTimeComponent}, 
    {path:'merge-map', component:MergeMapComponent},
    {path:'switch-map', component:SwitchMapComponent},
    {path:'switch-map-search', component:SwitchMapSearchAssignmentComponent},

]},
{path:'promises', component:PromisesComponent},

{path:'async-await', component:AsyncAwaitComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
