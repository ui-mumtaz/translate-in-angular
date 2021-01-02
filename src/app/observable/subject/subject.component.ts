import {Component, OnDestroy, OnInit} from '@angular/core';
import {DesignUtilityService} from '../../appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {



  userName33: string = 'Sunny';

  constructor(private designUtilitySer: DesignUtilityService) {

     this.designUtilitySer.userName22.subscribe(res =>  {
             this.userName33 = res;

    });
  }

  ngOnInit(): void {

   this.designUtilitySer.exclusive.next(true);
  }

  ngOnDestroy() {
    this.designUtilitySer.exclusive.next(false);
  }


}
