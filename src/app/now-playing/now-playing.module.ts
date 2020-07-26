import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NowPlayingPageRoutingModule } from './now-playing-routing.module';

import { NowPlayingPage } from './now-playing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NowPlayingPageRoutingModule
  ],
  declarations: [NowPlayingPage]
})
export class NowPlayingPageModule {}
