import { Component, OnInit } from '@angular/core';
import { UsdRateService} from '../Services/usd-rate.service';
import {Currency} from '../Models/Currency';


@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.scss']
})
export class CurrencyRateComponent implements OnInit{


  constructor(public usdRateService: UsdRateService) {
  }
  currencies: Currency[] = [];

  ngOnInit(): void {

    this.usdRateService.getUsdCurrency().subscribe(data => this.currencies = JSON.parse(JSON.stringify(data)));

  }
}

