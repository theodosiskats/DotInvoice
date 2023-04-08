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
    this.disableForm();
  }

  triggerEdit() {
    if(this.canEdit === false){
      this.enableForm()
    } else {
      this.disableForm()
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
        this.initializeForm()
      }
    })
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.customerForm.value).subscribe({
      next: () => {
        this.toastr.success('Customer "' + this.customer?.companyName + '" updated')
        this.triggerEdit()
      },
      error: (err: any) => {
        console.log(err)
        this.toastr.error(err.message)
      }
    })
  }

  disableForm() {
    this.customerForm.get('companyName')?.disable()
    this.customerForm.get('contactPerson')?.disable()
    this.customerForm.get('taxId')?.disable()
    this.customerForm.get('telephone')?.disable()
    this.customerForm.get('mobile')?.disable()
    this.customerForm.get('email')?.disable()
    this.customerForm.get('address')?.disable()
    this.customerForm.get('city')?.disable()
    this.customerForm.get('state')?.disable()
    this.customerForm.get('country')?.disable()
    this.customerForm.get('zip')?.disable()
    this.customerForm.get('shippingAddress')?.disable()
    this.customerForm.get('comments')?.disable()
    this.customerForm.get('')?.disable()
  }

  enableForm() {
    this.customerForm.get('companyName')?.enable()
    this.customerForm.get('contactPerson')?.enable()
    this.customerForm.get('taxId')?.enable()
    this.customerForm.get('telephone')?.enable()
    this.customerForm.get('mobile')?.enable()
    this.customerForm.get('email')?.enable()
    this.customerForm.get('address')?.enable()
    this.customerForm.get('city')?.enable()
    this.customerForm.get('state')?.enable()
    this.customerForm.get('country')?.enable()
    this.customerForm.get('zip')?.enable()
    this.customerForm.get('shippingAddress')?.enable()
    this.customerForm.get('comments')?.enable()
    this.customerForm.get('')?.enable()
  }

}
