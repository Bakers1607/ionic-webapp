import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';


/*
  Generated class for the MainPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/main/main.html',
  providers: [InAppBrowser]
})
export class MainPage {

  constructor(private nav: NavController) {

  }

  ngAfterViewInit() {
    let url = 'http://sseramom.com/?device=mobile';
    InAppBrowser.open(url, "_blank", "location=no,toolbar=no");
  }

}
