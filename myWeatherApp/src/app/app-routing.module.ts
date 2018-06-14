import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashintondcComponent } from './washintondc/washintondc.component';

const routes: Routes = [
  {path: "seattle", component: SeattleComponent },
  {path: "sanjose", component: SanJoseComponent },
  {path: "burbank", component: BurbankComponent },
  {path: "dallas", component: DallasComponent },
  {path: "washington", component: WashintondcComponent },
  {path: "chicago", component: ChicagoComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
