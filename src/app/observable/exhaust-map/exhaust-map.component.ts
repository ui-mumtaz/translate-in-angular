import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DesignUtilityService} from '../../appServices/design-utility.service';
import {fromEvent} from 'rxjs';
import {concatMap, exhaustMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements AfterViewInit {

  url = 'https://global-1bb0f.firebaseio.com/exhaustMap.json';
  num = 0;
  saveRequest22;
  fetching22 = false;
  @ViewChild('btn22') btn22: ElementRef;

  constructor(private http: HttpClient,
              private designUtilityService: DesignUtilityService) { }

  ngAfterViewInit() {

fromEvent(this.btn22.nativeElement, 'click').pipe(
                                          tap(() => this.fetching22 = true),
                                          exhaustMap(() => this.onSave(this.num++))
                                                 ).subscribe(res => {
                                                            this.onFetch();
                                                            this.fetching22 = false;
                                                   });
  }

  onSave(changes) {
   return this.http.put(this.url, { data11:changes })
  }

  onFetch() {
    this.http.get<any>(this.url).subscribe(res  =>  {
      console.log(res.data11);
       this.saveRequest22 = res.data11;
    });
  }
}
/* it is easy to understand operator, assume we click on a button then request goes to
server and fetch the result and return it,
e.g: in exhaustMap() after clicking on button the request goes to server but result did not
come till now and at this stage if we again click on button, then this second event will be
ignored as the result of the first click event did not come till now,
this is the benefit of the exhaustMap()


 */
