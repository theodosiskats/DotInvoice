import {Component, ViewChild} from '@angular/core';
import {TabDirective, TabsetComponent} from "ngx-bootstrap/tabs";
import {countriesList} from "../../../staticObjects/countriesList";
import {Customer} from "../../../_models/customer";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../_services/customer.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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
  customerId?: string
  customerForm: FormGroup = new FormGroup({})
  validationErrors: string[] | undefined

  constructor(private customerService: CustomerService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
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

  //FIXME - Reactive forms : on submit, I get a type error that says that "Cannot read property of null (reading 'companyName')
  // even though companyName is not null
  initializeForm() {
    this.customerForm = this.fb.group({
      id: [this.customer?.id],
      companyName: [this.customer?.companyName ?? '', Validators.required],
      contactPerson: [this.customer?.contactPerson ?? '', Validators.required],
      taxId: [this.customer?.taxId ?? '', Validators.required],
      telephone: [this.customer?.telephone ?? '', Validators.required],
      mobile: [this.customer?.mobile ?? '', Validators.required],
      email: [this.customer?.email ?? '', Validators.required],
      address: [this.customer?.address ?? '', Validators.required],
      city: [this.customer?.city ?? '', Validators.required],
      state: [this.customer?.state ?? '', Validators.required],
      country: [this.customer?.country ?? '', Validators.required],
      zip: [this.customer?.zip ?? '', Validators.required],
      comments: [this.customer?.comments ?? '', Validators.required],
      shippingAddress: [this.customer?.shippingAddress ?? '', Validators.required],
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
        this.customer = response;
        this.initializeForm()
      }
    })
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.customerForm.value).subscribe({
      next: (response: any) => {
        this.toastr.success('Customer "' + response.companyName.toString() + '" updated');
      },
      error: (err: any) => {
        console.log(err);
        this.toastr.error(err.message);
      }
    })
  }
}
