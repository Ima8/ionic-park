import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Park, ParkDataProvider } from '../../providers/park-data/park-data'
import { ParkDetailPage } from '../park-detail/park-detail'

/**
 * Generated class for the ParkListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html',
})
export class ParkListPage {


  parkList: Array<Park> = [];
  parkListFiltered: Array<any> = [];
  isfiltered: boolean;
  grid: Array<Array<Park>>;

  constructor(
    public parksData: ParkDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.isfiltered = false;

    this.parksData.loadParks()
      .subscribe(data => { // success
        this.parkList = data;
        this.grid = Array(Math.ceil(data.length / 2));
        this.mergeTogrid()
      },
      error => { // error
        console.log("error is " + error)
      },
      () => { // complete
        console.log('read quotes Complete ' + this.parkList)
      }
      );
  }

  mergeTogrid() {

    let rowNum = 0; //counter to iterate over the rows in the grid

    for (let i = 0; i < this.parkList.length; i += 2) { //iterate images

      this.grid[rowNum] = Array(2); //declare two elements per row

      if (this.parkList[i]) { //check file URI exists
        this.grid[rowNum][0] = this.parkList[i] //insert image
      }

      if (this.parkList[i + 1]) { //repeat for the second image
        this.grid[rowNum][1] = this.parkList[i + 1]
      }

      rowNum++; //go on to the next row
    }

  }
  searchQuotes(event) {
    console.log(event.target.value);
    if (event.target.value) {
      if (event.target.value.length > 2) {
        let filteredJson = this.parkList.filter(row => {
          if (row.park.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1) {
            return true;
          } else {
            return false;
          }
        });
        this.isfiltered = true;
        this.parkListFiltered = filteredJson;
      } else {
        this.isfiltered = false
      }
    } else {
      this.isfiltered = false
    }

  }
  getImagePath(imageName) {
    return this.parksData.getImageThumbsUrl(imageName)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkListPage');

  }

  selectPark(park) {
    this.navCtrl.push(ParkDetailPage, park);

  }

}
