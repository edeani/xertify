import { Component, OnInit } from '@angular/core';
import {VerifyModel} from '../verify.model';
import {log} from 'util';
import {VerifyService} from '../VerifyService';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  valueVerify: VerifyModel[] = [];

  constructor(private verifiService: VerifyService) { }

  ngOnInit() {
  }


  verify(event) {
    const t1 = 'AQWE_kD-opzpbjaclNdIluCS-qiZTBt2Mh1Ol5vrLFfyW-PC9EM-';
    const t2 = 'pZcc3xU-NnE28g0_S2S25NCQ-ScOXqL5NepRrBnlS3ELLRRtolj3H-';
    const t3 = 'Jx5fKOlBa0QW-QhQ0Ac_iOZqzKQWsZ5EzWPumpvasbSh4R8AxCpMJHI9_';
    const t4 = 'dIM2tARfTcg8AKTMRKsG6QCu-oKokWcL7H1qaGUtG3PmnR6HRYe0FZ7hZ-';
    const t5 = 'YOOQKAqO4cg8zbDl5w-CCA8_Z2U7ChunM2G0yOIhQibBnAigvJe8GY7GDUmkD';
    const t6 = '3oniT9SNC_3qlWB_NaZ48ITURxgH4RfOqwg4ZVHGV6EhUuAops756D';
    const t7 = 'QLug2xNU8Swkvg';

    this.verifiService.getVerification(event.target.value, t1 + t2 + t3 + t4 + t5 + t6 + t7)
      .subscribe(
        (valueVerify: any[]) => {
          this.valueVerify = valueVerify;
          console.log(valueVerify);
        },
        (error) => {
            console.log(error);
        }
      );

    log(event.target.value);


  }

}
