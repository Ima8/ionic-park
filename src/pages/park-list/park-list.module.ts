import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkListPage } from './park-list';

@NgModule({
  declarations: [
    ParkListPage,
  ],
  imports: [
    IonicPageModule.forChild(ParkListPage),
  ],
})
export class ParkListPageModule {}
