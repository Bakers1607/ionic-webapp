import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MainPage } from '../main/main';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  main: any;
  constructor(private nav: NavController) {
    this.main = MainPage;
  }

}
