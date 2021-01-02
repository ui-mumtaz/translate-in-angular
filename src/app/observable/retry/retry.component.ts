import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, retry, retryWhen, scan} from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  person;
  fetching: boolean = false;
  status= 'No Data';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {


  }
// retry() it is prity simple, just write retry(2)  it meany if error comes then retry 2 times
// retryWhen() , in this operator we have to define a condition that when exactelly to retry
//               for defining a condition we have to use another pipe() inside the retryWhen()
// delay() we are putting a delay of 3sec in every retry,
// scan()  we are putting a condition that till when we should retry, in scan() we are getting
// retry count value as number.

  fetchDetails22() {
    this.fetching = true;
    this.status = 'Fetching Data...';
    this.http.get('https://global-1bb0f.firebaseio.com/user.json')
    //         .pipe(retry(2))
               .pipe(
                   retryWhen(err => err.pipe(
                                     delay(3000),
                                     scan((retryCount11) => {
                                                        if ( retryCount11  >= 5) {
                                                           throw err;
                                                        }else {
                                                          retryCount11 = retryCount11 + 1;
                                                       this.status = 'Retrying Count = '+ retryCount11;
                                                           return retryCount11;
                                                        }
                                                        },0)
               )))
              .subscribe(
                 (res) => {
                           console.log(res);
                           this.person = res;
                           this.status = 'Data Fetched';
                           this.fetching = false;
                       },
               (err) => {
                     console.log(err);
                 this.status = 'Problem in Fetching';
                     this.fetching = false;
                   });
  }

}
