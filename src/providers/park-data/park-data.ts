import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
/*
  Generated class for the ParkDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParkDataProvider {
  rootPathApi: String
  thumbsUrl: String
  headerUrl: String

  constructor(public http: Http) {
    console.log('Hello ParkDataProvider Provider');

    // Define path for call api
    this.rootPathApi = "http://web.sit.kmutt.ac.th/sanit/int493/";
  }

  getParkUrl() {
    //return this.rootPathApi
    return this.rootPathApi
  }
  getImageThumbsUrl(imageName) {
    // return this.getImageThumbsUrl + imageName
    return this.rootPathApi + "assets/img/thumbs/" + imageName
  }
  getImageHeadersUrl(imageName) {
    // return this.getImageHeadersUrl + imageName
    return this.rootPathApi + "assets/img/headers/" + imageName
  }

  loadParks(): Observable<Park[]> {
    const pathAPIParks = this.rootPathApi + "parks.php"
    return this.http.get(pathAPIParks).map(res => res.json().parks)
  }

}

export class Park {
  park: string;
  state: string;
  image: string;
  description: string;
}
