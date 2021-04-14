import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class WeatherByLocationService {
  constructor(private http: HttpClient) {
  }




   getWeatherByCoordinates(lat: number, lon: number){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=217383a0acc26e401adcadaa58f77818`);
  }

}
