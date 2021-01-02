import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval_timer/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { Concat2Component } from './observable/concat2/concat2.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { SwitchMap2Component } from './observable/switch-map2/switch-map2.component';
import { SwitchMapFinalExampleComponent } from './observable/switch-map-final-example/switch-map-final-example.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ZipForkJoinComponent } from './observable/zip-fork-join/zip-fork-join.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'promise', component: PromiseComponent },
    {
        path: 'observable', component: ObservableComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'fromEvent', component: FromEventComponent },
            { path: 'interval', component: IntervalComponent },
            { path: 'of-from', component: OfFromComponent },
            { path: 'to-array', component: ToArrayComponent },
            { path: 'custom', component: CustomComponent },
            { path: 'map', component: MapComponent },
            { path: 'pluck', component: PluckComponent },
            { path: 'filter', component: FilterComponent },
            { path: 'tap', component: TapComponent },
            { path: 'take', component: TakeComponent },
            { path: 'retry', component: RetryComponent },
            { path: 'debouncetime', component: DebouncetimeComponent },
            { path: 'subject', component: SubjectComponent },
            { path: 'replay-subject', component: ReplaySubjectComponent },
            { path: 'async-subject', component: AsyncSubjectComponent },
            { path: 'concat', component: ConcatComponent },
            { path: 'merge', component: MergeComponent },
            { path: 'mergemap', component: MergemapComponent },
            { path: 'concatmap', component: ConcatmapComponent },
            { path: 'concat2', component: Concat2Component },
            { path: 'switchMap', component: SwitchMapComponent },
            { path: 'switchMap-2', component: SwitchMap2Component },
            { path: 'switchMap-finalVersion', component: SwitchMapFinalExampleComponent },
            { path: 'exhaustMap', component: ExhaustMapComponent },
            { path: 'shareReplay', component: ShareReplayComponent },
            { path: 'combineLatest', component: CombineLatestComponent },
            { path: 'zip-forkjoin', component: ZipForkJoinComponent }
        ]
    },
    {
        path: '**',
        redirectTo: 'promise'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
