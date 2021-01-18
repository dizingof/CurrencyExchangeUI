import { Component, OnInit } from '@angular/core';
import { UsdRateService} from '../Services/usd-rate.service';
import {Currency} from '../Models/Currency';


@Component({
  selector: 'app-rate-usd',
  templateUrl: './rate-usd.component.html',
  styleUrls: ['./rate-usd.component.scss']
})
export class RateUsdComponent implements OnInit{


  constructor(public usdRateService: UsdRateService) {
  }
  currencies: Currency[] = [];

  ngOnInit(): void {

    this.usdRateService.getUsdCurrency().subscribe(data => this.currencies = JSON.parse(JSON.stringify(data)));

  }
}
