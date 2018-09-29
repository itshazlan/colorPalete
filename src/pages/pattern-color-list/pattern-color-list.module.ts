import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatternColorListPage } from './pattern-color-list';

@NgModule({
  declarations: [
    PatternColorListPage,
  ],
  imports: [
    IonicPageModule.forChild(PatternColorListPage),
  ],
})
export class PatternColorListPageModule {}
