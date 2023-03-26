import {Component} from '@angular/core';
import {countriesList} from "../../../staticObjects/countriesList";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../_services/customer.service";
import {Router} from "@angular/router";
import {NewCustomer} from "../../../_models/newCustomer";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent{
  validationErrors: string[] | undefined
  countries: string[] = [...countriesList]
  newCustomerForm: FormGroup = new FormGroup({})
  customer: NewCustomer | undefined

  constructor(private customerService: CustomerService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.newCustomerForm = this.fb.group({
      companyName: ['', Validators.required],
      contactPerson: ['', Validators.required],
      taxId: ['', Validators.required],
      telephone: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      comments: ['', Validators.required],
      shippingAddress: ['', Validators.required],
    })
  }

  createCustomer() {
    this.customerService.createCustomer(this.newCustomerForm.value).subscribe({
      next: (response: any) => {
        this.toastr.success('Customer "' + response.companyName.toString() + '" created');
        this.newCustomerForm?.reset(this.customer);
      },
      error: (err: any) => {
        console.log(err);
        this.toastr.error(err.message);
      }
    });
  }

}
