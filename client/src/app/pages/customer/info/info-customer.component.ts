import {Component, ViewChild} from '@angular/core';
import {TabDirective, TabsetComponent} from "ngx-bootstrap/tabs";
import {countriesList} from "../../../staticObjects/countriesList";
import {Customer} from "../../../_models/customer";
import {CustomerService} from "../../../_services/customer.service";
import {ActivatedRoute} from "@angular/router";

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
  customer: Customer | undefined
  selectedCountry: string | undefined
  customerId: string | undefined

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.customerId = id;
        this.getCustomer(id)
      }
    })
  }

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

  getCustomer(id: string) {
    this.customerService.getCustomer(id).subscribe({
      next: response => {
        this.customer = response
      }
    })
  }
}
