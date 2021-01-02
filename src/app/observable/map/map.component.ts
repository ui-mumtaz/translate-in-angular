import { Component, OnInit } from '@angular/core';
import {from, interval, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;


  msg1: string;
  msg2: number;


  constructor(private designUtilitySer: DesignUtilityService ) { }

  ngOnInit(): void {

    const brodCastVideos = interval(1000);

// Example -1
this.sub1 =
  brodCastVideos.pipe(
                    map(data1 => 'Video '+ data1 ))
                .subscribe(res => {
                         this.msg1 = res;
                  });

    setTimeout(() =>  {
      this.sub1.unsubscribe()
    },9900);
//-------------------------------------------------------

// Example -2

this.sub2 =
  brodCastVideos.pipe(
                   map(data1 => data1 * 10))
                .subscribe(res => {
                      this.msg2 = res;
  });

  setTimeout(() => {
    this.sub2.unsubscribe()
  },9900);


//-------------------------------------------------------

// Example -3
//  operator -->   from(take Array as source);

const members = from([
  { id: 1, name: 'aaa'},
  { id: 2, name: 'bbb'},
  { id: 3, name: 'ccc'},
  { id: 4, name: 'ddd'},
  { id: 5, name: 'eee'},
  { id: 6, name: 'fff'},
  { id: 7, name: 'ggg'},
  { id: 8, name: 'hhh'}
]);

members.pipe(map(data1 => data1.name ))
       .subscribe(res => {
            this.designUtilitySer.print22(res, 'elContainer22');
});


  }

}
