import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Search11} from '../appInterface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList';

  constructor(private http: HttpClient) { }



  getSearches(searchingText11): Observable<Search11> {

     return  this.http.get<Search11>(this.url + '?q=' + searchingText11);
  }


}
