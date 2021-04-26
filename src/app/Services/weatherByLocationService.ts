import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class WeatherByLocationService {
  constructor(private http: HttpClient) {
  }




   getWeatherByCoordinates(lat: number, lon: number){
    return this.http.get(`https://localhost:44336/api/Weather/GetWeatherByLocation?lat=${lat}&lon=${lon}`);
  }

}
