import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  tabChanged($event: Event) {
    console.log('Tab changed:', ($event as CustomEvent).detail.tab);
    console.log('selectedTab: ', this.selectedTab);
  }
  selectedTab = 'tab1';

  constructor() { }

}
