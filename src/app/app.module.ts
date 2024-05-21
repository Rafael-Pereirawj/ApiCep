import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { CepComponent } from './cep/cep.component';
import { ApiCepService } from './api-cep.service';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SobreComponent,
    HttpClientModule
  ],
  providers: [ApiCepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
