import { Component } from '@angular/core';
import {countriesList} from "../../../staticObjects/countriesList";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {
  countries: string[] = [...countriesList]
}
