import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
