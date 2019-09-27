import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InglesComponent } from './ingles/ingles.component';
import { FormDataComponent } from './form-data/form-data.component';
import { VerifyService } from './VerifyService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InglesComponent,
    FormDataComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [VerifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
