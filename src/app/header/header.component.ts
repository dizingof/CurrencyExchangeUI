import { Component, OnInit } from '@angular/core';
import {LocationService} from '../Services/locationService';
import {Coordinates} from '../Models/Сoordinates';
import {WeatherByLocationService} from '../Services/weatherByLocationService';
import {WeatherModel} from '../Models/WeatherModel';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public locationService: LocationService, public weatherByLocation: WeatherByLocationService) { }

  coordinates: Coordinates;
  public weatherModel: WeatherModel;

  ngOnInit(): void {
    this.locationService.getPosition().then(pos =>
    {
      this.weatherByLocation.getWeatherByCoordinates(pos.lat, pos.lng).subscribe(data => this.weatherModel = JSON.parse(JSON.stringify(data)));
      console.log();
      console.log();
    });
  }
}
