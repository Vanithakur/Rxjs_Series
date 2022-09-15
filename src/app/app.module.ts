import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DebounceTimeComponent } from './component/debounce-time/debounce-time.component';
import { ReplaySubjectComponent } from './component/replay-subject/replay-subject.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { SeriesComponent } from './component/series/series.component';
import { PromisesComponent } from './component/series/promises/promises.component';
import { AsyncAwaitComponent } from './component/series/async-await/async-await.component';
import { ObservableComponent } from './component/observable/observable.component';
import { FormEventComponent } from './component/observable/form-event/form-event.component';
import { ListComponent } from './component/observable/list/list.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
import { ToArrayComponent } from './component/observable/to-array/to-array.component';
import { CustomObservableComponent } from './component/observable/custom-observable/custom-observable.component';
import { MapComponent } from './component/observable/map/map.component';
import { PluckComponent } from './component/observable/pluck/pluck.component';
import { FilterComponent } from './component/observable/filter/filter.component';
import { TapComponent } from './component/observable/tap/tap.component';
import { TakeComponent } from './component/observable/take/take.component';
import { ConcatComponent } from './component/observable/concat/concat.component';
import { MergeComponent } from './component/observable/merge/merge.component';
import { MergeMapComponent } from './component/observable/merge-map/merge-map.component';
import { SwitchMapComponent } from './component/observable/switch-map/switch-map.component';
import { SwitchMapSearchAssignmentComponent } from './component/observable/switch-map-search-assignment/switch-map-search-assignment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DebounceTimeComponent,
    ReplaySubjectComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SeriesComponent,
    PromisesComponent,
    AsyncAwaitComponent,
    ObservableComponent,
    FormEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    SwitchMapComponent,
    SwitchMapSearchAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
