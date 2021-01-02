import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  //url = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA';

  constructor(private http: HttpClient) { }

  translate(text: string) {
    return this.http.post(environment.apiUrl, {
      "q": text,
      "target": "es"
    }).pipe(
      map((res: any) => {
        return res.data.translations[0].translatedText;
      })
    );
  }
}
