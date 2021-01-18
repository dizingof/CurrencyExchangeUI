import { Component, OnInit } from '@angular/core';
import { UsdRateService} from '../Services/usd-rate.service';
import {Currency} from '../Models/Currency';


@Component({
  selector: 'app-rate-eur',
  templateUrl: './rate-eur.component.html',
  styleUrls: ['./rate-eur.component.scss']
})
export class RateEurComponent implements OnInit{


  constructor(public usdRateService: UsdRateService) {
  }
  currencies: Currency[] = [];

  ngOnInit(): void {

    this.usdRateService.getEurCurrency().subscribe(data => this.currencies = JSON.parse(JSON.stringify(data)));

  }
}
