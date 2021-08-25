import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KeysPipe } from './keys.pipe';
import {FormsModule} from '@angular/forms';
import {UsdRateService} from './Services/usd-rate.service';
import {HttpClientModule} from '@angular/common/http';
import { RateUsdComponent } from './rate-usd/rate-usd.component';
import { RateEurComponent } from './rate-eur/rate-eur.component';
import { RateRubComponent } from './rate-rub/rate-rub.component';
import {Routes, RouterModule} from '@angular/router';
import { FuelRateComponent } from './fuel-rate/fuel-rate.component';


const appRoutes: Routes =  [
  {path: '', component: RateUsdComponent},
  {path: 'rateusd', component: RateUsdComponent},
  {path: 'rateeur', component: RateEurComponent},
  {path: 'raterub', component: RateRubComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    KeysPipe,
    RateUsdComponent,
    RateEurComponent,
    RateRubComponent,
    FuelRateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsdRateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
