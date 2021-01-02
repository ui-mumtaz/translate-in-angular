import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from '../../appServices/design-utility.service';
import {from, of} from 'rxjs';
import {concatMap, delay, map, mergeMap, switchAll, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrls: ['./switch-map2.component.scss']
})
export class SwitchMap2Component implements OnInit {
  /*

   */
  constructor(private designUtilitySer: DesignUtilityService) { }


  getData22(data) {
    return of(data +'Video uploaded').pipe(delay(1000));
  }

  ngOnInit(): void {
    const source11 = from(['Tech', 'Comedy', 'News']);

//Ex -01  mergeMap(
// it merges all the data and  give us in one time whole merged data
source11.pipe( mergeMap(res => this.getData22(res))
             ).subscribe( res => {
                 this.designUtilitySer.print22(res, 'elContainer11')
        });


//Ex- 02 concatMap()
// it take one value then process it and give us, after that again take second value
// and process it, one by one in Data defined order it works
source11.pipe( concatMap(res => this.getData22(res))
             ).subscribe( res => {
                this.designUtilitySer.print22(res, 'elContainer22');
         });

//Ex - 03  switchMap()
// only the last sent request will be processed
source11.pipe( switchMap(res => this.getData22(res))
             ).subscribe(res => {
                  this.designUtilitySer.print22(res, 'elContainer33');
        });

  }






}
