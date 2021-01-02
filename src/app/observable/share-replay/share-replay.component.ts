import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {

  url = 'https://test-products-b05fe.firebaseio.com/products.json';
  allProducts22: Observable<any>;
  mobiles: Observable<any>;
  laptops: Observable<any>;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.allProducts22 = this.http.get(this.url).pipe( shareReplay() );

    this.mobiles = this.allProducts22
                       .pipe(
                           map(res => res.filter(res11 => {
                                                       return res11['type'] == 'mobile'
                                                })));

    this.laptops = this.allProducts22
                       .pipe(
                           map(res => res.filter(res11 => {
                                                       return res11['type'] == 'pc'
                                                })));
  }

}
/*
How the Data  as json object is coming
[{
  "description" : "abc",
  "id" : "1",
  "imgUrl" : "http://abc.com",
  "name": "Mobile",
  "price": 5500,
  "type": "mobile"
}]
-------------------------------------------------------------
main point to understand is that  check in the html

"allProducts | async"
"mobiles | async"
"laptop | async"

means that we are doing .subscribe() through  "async" , it means 3 requests are sending to the server  but if we use
shareReplay() then for the url only one request will be sended , eventhough we are calling it many times.


 */
