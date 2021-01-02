import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  text: string;
  translatedtext: string;

  constructor(private translateService: TranslateService) { }

  submit() {
    this.translateService.translate(this.text).subscribe(
      (result)=> {
        this.translatedtext = result;
      }
    )
  }
}
