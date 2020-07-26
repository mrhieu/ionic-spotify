import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NowPlayingPage } from './now-playing.page';

const routes: Routes = [
  {
    path: '',
    component: NowPlayingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NowPlayingPageRoutingModule {}
