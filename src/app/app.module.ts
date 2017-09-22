import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { MyApp } from './app.component';
import { ParkListPage } from '../pages/park-list/park-list'
import { ParkDetailPage } from '../pages/park-detail/park-detail'

import { ParkDataProvider } from '../providers/park-data/park-data';

@NgModule({
  declarations: [
    MyApp,
    ParkListPage,
    ParkDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ParkListPage,
    ParkDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ParkDataProvider
  ]
})
export class AppModule {}
