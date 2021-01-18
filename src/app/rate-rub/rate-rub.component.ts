import { Component, OnInit } from '@angular/core';
import { UsdRateService} from '../Services/usd-rate.service';
import {Currency} from '../Models/Currency';


@Component({
  selector: 'app-rate-rub',
  templateUrl: './rate-rub.component.html',
  styleUrls: ['./rate-rub.component.scss']
})
export class RateRubComponent implements OnInit{


  constructor(public usdRateService: UsdRateService) {
  }
  currencies: Currency[] = [];

  ngOnInit(): void {

    this.usdRateService.getRubCurrency().subscribe(data => this.currencies = JSON.parse(JSON.stringify(data)));

  }
}
