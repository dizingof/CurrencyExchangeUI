import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class UsdRateService {
  constructor(private http: HttpClient) {
  }

 getUsdCurrency(){
    return this.http.get('http://gearhosttest2.eu1.gearhost.cloud/api/CurrencyRateList/GetCurrencyList');
 }
}
