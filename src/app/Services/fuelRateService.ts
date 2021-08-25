import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class FuelRateService {
  constructor(private http: HttpClient) {
  }

  getFuel(){
    return this.http.get('https://testbackend.somee.com/api/FuelRateList/GetFuelList');
  }
}
