import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  radio: string = 'biff';
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  ngOnInit() {
  }

  login() {
    console.log(this.form);
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.showAlert(JSON.stringify(barcodeData));
     }).catch(err => {
       console.log(err);
      this.showAlert('Ocurrio un error D:');
     });
  }

  showAlert(message: string) {
    this.alertCtrl.create({
      message
    }).then(alert => {
      alert.present();
    })
  }

}
