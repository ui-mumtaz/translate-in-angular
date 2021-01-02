import { Component, OnInit } from '@angular/core';
import {from, of} from 'rxjs';
import {delay, map, mergeAll, mergeMap, switchAll, switchMap} from 'rxjs/operators';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styles: [
  ]
})
export class SwitchMapComponent implements OnInit {
/*
assume we put a word "Angular" in google browser search but before the
google give us a result we immeaditely delete the "Angular" i wrote
"React" so in this case if we use switchMap() the first request with the
"Angular" is destroyed and we will get the result only for the second
request with "React"
 */
  constructor(private designUtilitySer: DesignUtilityService) { }


  getData22(data) {
    return of(data +'Video uploaded').pipe(delay(1000));
  }

  ngOnInit(): void {
    const source11 = from(['Tech', 'Comedy', 'News']);

//Ex -01  map()
// to understand this map() just check mergeMap() their explains clearly
source11.pipe( map(res => this.getData22(res))
             ).subscribe(res => res.subscribe( res => {
                  this.designUtilitySer.print22(res, 'elContainer11')
           }));


/*Ex- 02 switchAll()
in this case we will get only 1 result, as we have 3 values in the source11
 so when we do  source11.pipe()  then 3 request goes, but as we are using
switchAll() and switchMap() it works only with the latest request
so the other 2 request will be destroyed and only third request Data will be
returned back
*/
source11.pipe( map(res => this.getData22(res)),
               switchAll()
             ).subscribe( res => {
                  this.designUtilitySer.print22(res, 'elContainer22');
        });

//Ex - 03 switchMap()
// read the explanation of Ex - 02  same apply hier also
source11.pipe( switchMap(res => this.getData22(res))
             ).subscribe(res => {
                    this.designUtilitySer.print22(res, 'elContainer33');
       });

  }






}
