import { Component } from '@angular/core';
import { VerifyModel } from './verify.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landingConsultaCertify';
  valueVerify: string = null;


  verify(event) {
    const verifyVar: VerifyModel = new VerifyModel(event.target.value);
    if (verifyVar.publicKey == null) {
      verifyVar.publicKey = 'S';
    }
    this.valueVerify = event.target.value;
  }
}
