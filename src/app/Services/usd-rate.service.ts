import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class UsdRateService {
  constructor(private http: HttpClient) {
  }

 getUsdCurrency(){
    return this.http.get('https://kursvalut.somee.com/api/CurrencyRateList/GetCurrencyList');
 }
}
