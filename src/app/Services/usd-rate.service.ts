import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class UsdRateService {
  constructor(private http: HttpClient) {
  }

 getUsdCurrency(){
    return this.http.get('https://testbackend1.somee.com/api/CurrencyRateList/GetCurrencyUsdList');
 }

  getEurCurrency(){
    return this.http.get('https://testbackend1.somee.com/api/CurrencyRateList/GetCurrencyEurList');
  }

  getRubCurrency(){
    return this.http.get('https://testbackend1.somee.com/api/CurrencyRateList/GetCurrencyRubList');
  }
}
