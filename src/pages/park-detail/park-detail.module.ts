import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkDetailPage } from './park-detail';

@NgModule({
  declarations: [
    ParkDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ParkDetailPage),
  ],
})
export class ParkDetailPageModule {}
