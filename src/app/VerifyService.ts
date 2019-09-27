import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { VerifyModel} from './verify.model';

@Injectable()
export class VerifyService {

  onVerified = new EventEmitter<VerifyModel>();

  constructor(private http: HttpClient) {

  }


  getVerification(tokenCertify: string, bearer: string) {

    return this.http.request('GET', 'https://0lzbld9qif.execute-api.us-east-1.amazonaws.com/dev/getClientCertificatesByCode',
      {responseType: 'json'
        , headers: {
          Authorization: 'Bearer ' + bearer
        }
      });
  }
}
