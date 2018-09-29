import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColorListPage } from './color-list';

@NgModule({
  declarations: [
    ColorListPage,
  ],
  imports: [
    IonicPageModule.forChild(ColorListPage),
  ],
})
export class ColorListPageModule {}
