import { ParkDataProvider, Park } from './../../providers/park-data/park-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParkDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-park-detail',
  templateUrl: 'park-detail.html',
})
export class ParkDetailPage {
  parkDetail: Park
  constructor(public parksData: ParkDataProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.parkDetail = navParams.data
    console.log(this.parkDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkDetailPage');
  }
  getImagePath(imageName) {
    return this.parksData.getImageHeadersUrl(imageName)
  }
}
