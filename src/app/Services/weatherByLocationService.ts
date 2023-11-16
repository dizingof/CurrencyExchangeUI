import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class WeatherByLocationService {
  constructor(private http: HttpClient) {
  }




   getWeatherByCoordinates(lat: number, lon: number){
    return this.http.get(`https://testbackend1.somee.com/api/Weather/GetWeatherByLocation?lat=${lat}&lon=${lon}`);
  }

}
