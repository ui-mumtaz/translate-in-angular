import { Injectable } from '@angular/core';
import {AsyncSubject, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

   exclusive = new Subject<boolean>();
   userName22 = new Subject<string>();

  // ReplaySubject(3)  <-- here we are storing the last 3 inserted values
 //  videoEmit22 = new ReplaySubject<string>(3);

// ReplaySubject(3 , 5000) <-- here 5000 means 5sec, means store only
//                     those values which are inserted in last 5 sec
  videoEmit22 = new ReplaySubject<string>(3,5000);


  async_VideoEmit22 = new AsyncSubject();

  constructor() { }


  print22(val, containerId) {
    let el22 = document.createElement('li');
    el22.innerText = val;

    document.getElementById(containerId)
      .appendChild(el22);
  }

  print33(val, containerId){
    let el = document.createElement('div');
    el.setAttribute('class', 'item')
    el.innerHTML = val;
    document.getElementById(containerId).prepend(el)
  }


}
