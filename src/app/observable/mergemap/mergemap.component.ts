import { Component, OnInit } from '@angular/core';
import {from, of} from 'rxjs';
import {map, mergeAll, mergeMap} from 'rxjs/operators';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {
/*
( map + mergeAll = mergeMap)for understanding mergeMap() he uses 3 example
mergeMap() is a flattening operator
in Example -01
(1) we get a observable in a observable means in the getData22()
we are returning  of(data---)  means we are returning a Observable
(2) source11 = from(data--)  here we are also returning a observable
as we are returning 2 observable so we need to do 2 times subscribe
and at end we are getting the Data
so first we have to .subscribe the .pipe() then we have to .subscribe() the
response of the .pipe()
 */
  constructor(private designUtilitySer: DesignUtilityService) { }

  getData22(data) {
    return of(data +'Video uploaded');
  }

  ngOnInit(): void {
    const source11 = from(['Tech', 'Comedy', 'News']);

//Example -01  map()
source11.pipe( map(res => this.getData22(res))
             ).subscribe(res => res.subscribe( res => {
                  this.designUtilitySer.print22(res, 'elContainer11')
      }));

/*Example - 02  map() + mergeAll()
as explains in the first example we are getting observable in a observable
so we are doing 2 times .subscribe() but with the help of mergeAll() it will
extract the data of both the Observable inside the .pipe() and when we do
.subscribe() the .pipe() we get the data, so we do not need to du 2 times .subscribe()
*/
source11.pipe( map(res => this.getData22(res)),
               mergeAll()
             ).subscribe( res => {
          this.designUtilitySer.print22(res, 'elContainer22');
        });

/* Example -03  map + mergeAll = mergeMap()
as shown in this example we are using directly mergeMap() and even then we are
getting data as Observable in a Observable then als mergeMap() extract the
data of this Observable inside Observable type in the .pipe() and when we are
doing .subscribe() then we will get the end data.
 */
source11.pipe( mergeMap(res => this.getData22(res))
             ).subscribe(res => {
                  this.designUtilitySer.print22(res, 'elContainer33');
         });





  }

}
