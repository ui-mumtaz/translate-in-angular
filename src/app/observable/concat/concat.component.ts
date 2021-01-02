import { Component, OnInit } from '@angular/core';
import {concat, interval} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private designUtilitySer: DesignUtilityService) { }

  ngOnInit(): void {

    const source11 = interval(1000).pipe( map( x => 'Tech Video ' + (x +1)),
                                                take(5)
                                               );

    const source22 = interval(1000).pipe( map( x => 'Comedy Video ' + (x +1)),
                                                take(3)
    );

    const source33 = interval(1000).pipe( map( x => 'News Video ' + (x +1)),
                                                take(4)
    );


    const FinalObs = concat(source11,source22,source33);


    FinalObs.subscribe(res =>{
      this.designUtilitySer.print22(res, 'elContainer11')
    })
  }





}
