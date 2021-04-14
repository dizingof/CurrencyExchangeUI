import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class UsdRateService {
  constructor(private http: HttpClient) {
  }

 getUsdCurrency(){
    return this.http.get('https://gearhosttest2.eu1.gearhost.cloud/api/CurrencyRateList/GetCurrencyUsdList');
 }

  getEurCurrency(){
    return this.http.get('https://gearhosttest2.eu1.gearhost.cloud/api/CurrencyRateList/GetCurrencyEurList');
  }

  getRubCurrency(){
    return this.http.get('https://gearhosttest2.eu1.gearhost.cloud/api/CurrencyRateList/GetCurrencyRubList');
  }
}
