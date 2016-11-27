import { Component } from '@angular/core';

import { MapPage } from '../map/map.page';
import { ClimbPage } from '../climb/climb';
import { CragsPage } from '../crags/crags.page';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  mapRoot: any = MapPage;
  cragsRoot: any = CragsPage;
  addClimbRoot: any = ClimbPage;

  constructor() {

  }
}