import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashintondcComponent } from './washintondc/washintondc.component';

import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    SanJoseComponent,
    SeattleComponent,
    WashintondcComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
