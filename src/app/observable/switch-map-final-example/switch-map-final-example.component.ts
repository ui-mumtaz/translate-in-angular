import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {concatMap, debounceTime, distinctUntilChanged, filter, pluck, switchMap} from 'rxjs/operators';
import {SearchService} from '../../appServices/search.service';
import {Search11} from '../../appInterface/search.interface';

@Component({
  selector: 'app-switch-map-final-example',
  templateUrl: './switch-map-final-example.component.html',
  styleUrls: ['./switch-map-final-example.component.scss']
})
export class SwitchMapFinalExampleComponent implements AfterViewInit {

  @ViewChild('searchForm22') searchForm22: NgForm;
  searchResults22: Search11;
  searchResultCount;

  constructor(private searchService: SearchService) { }

  ngAfterViewInit() {

    const formValue22 = this.searchForm22.valueChanges;

    formValue22.pipe(
                  filter(() => this.searchForm22.valid),
                  pluck('searchTerm33'),
                  debounceTime(500),
                  distinctUntilChanged(),
                  switchMap(res => this.searchService.getSearches(res) )
               ).subscribe(res =>  {
                         this.searchResults22  = res;
                         this.searchResultCount = Object.keys(res).length;
            });
  }
/*
understand the Flow:
(1) from .pipe() we go to further only if the .form() is valid
(2) pluck()  it will take the value as object that is coming
(3) debounceTime() it wait 5 second till it send the value further
(4) if any value is sended and next value will be sent only if it does not match the old one
  rest is easy to understand
 */



}
