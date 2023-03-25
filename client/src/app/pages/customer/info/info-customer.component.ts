import {Component, ViewChild} from '@angular/core';
import {TabDirective, TabsetComponent} from "ngx-bootstrap/tabs";
import {countriesList} from "../../../staticObjects/countriesList";

@Component({
  selector: 'app-info-customer',
  templateUrl: './info-customer.component.html',
  styleUrls: ['./info-customer.component.css']
})
export class InfoCustomerComponent {
  @ViewChild('customerTabs', {static: true}) customerTabs?: TabsetComponent
  activeTab?: TabDirective
  countries: string[] = [...countriesList]
  canEdit: boolean = false


  triggerEdit() {
    if(this.canEdit === false){
      //modal appear and alert for loss of changes
        // if accept
          // disable inputs and reset data to original
        // else
          // don't disable inputs
        // break; to exit without changing the edit
    }
    this.canEdit = !this.canEdit
  }

  selectTab(heading: string) {
    if (this.customerTabs) {
      this.customerTabs.tabs.find(x => x.heading === heading)!.active = true
    }
  }

  onTabActivated(data: TabDirective) {
    this.activeTab = data
  }
}
