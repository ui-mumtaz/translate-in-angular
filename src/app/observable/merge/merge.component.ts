import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from '../../appServices/design-utility.service';
import {concat, interval, merge} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private designUtilitySer: DesignUtilityService) { }

  ngOnInit(): void {

    const source11 = interval(3000).pipe( map( x => 'Tech Video ' + (x +1)),
      take(5)
    );

    const source22 = interval(4000).pipe( map( x => 'Comedy Video ' + (x +1)),
      take(3)
    );

    const source33 = interval(3500).pipe( map( x => 'News Video ' + (x +1)),
      take(4)
    );


    const FinalObs = merge(source11,source22,source33);


    FinalObs.subscribe(res =>{
      this.designUtilitySer.print22(res, 'elContainer11')
    })
  }





}
