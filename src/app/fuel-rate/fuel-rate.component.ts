import { Component, OnInit } from '@angular/core';
import { FuelRateService } from '../Services/fuelRateService';
import {Fuel} from '../Models/Fuel';


@Component({
  selector: 'app-fuel-rate',
  templateUrl: './fuel-rate.component.html',
  styleUrls: ['./fuel-rate.component.scss']
})
export class FuelRateComponent implements OnInit {

  constructor(public fuelRateService: FuelRateService) { }

  fuels: Fuel[] = [];

  ngOnInit(): void {

    this.fuelRateService.getFuel().subscribe(data => this.fuels = JSON.parse(JSON.stringify(data)));
  }

}
