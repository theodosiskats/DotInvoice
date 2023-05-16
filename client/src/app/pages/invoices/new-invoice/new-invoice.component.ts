import {Component, ViewChild} from '@angular/core';
import {Invoice} from "../../../_models/invoice";
import {Product} from "../../../_models/product";
import {Customer} from "../../../_models/customer";
import {CustomerService} from "../../../_services/customer.service";
import {InvoiceService} from "../../../_services/invoice.service";
import {ProductService} from "../../../_services/product.service";
import {ToastrService} from "ngx-toastr";
import {SortService} from "../../../_services/utils/sorting.service";
import {FiltersComponent} from "../../shared-components/searchInput/filters.component";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent {
  @ViewChild('filters') filters: FiltersComponent | undefined
  @ViewChild('invoiceForm') invoiceForm: NgForm | undefined
  invoice: Invoice | undefined
  customerList: Customer[] = []
  productList: Product[] = []
  productsInvoiced: Product[] = []
  filteredList: any[] = [];
  selectedCustomer: Customer | undefined;

  constructor(
    private customerService: CustomerService,
    private invoiceService: InvoiceService,
    private productService: ProductService,
    private toastr : ToastrService,
    private sortService: SortService
  ) {
  }

  ngOnInit() {
    this.addProduct()
    this.getCustomerList()
  }

  addProduct(){
    const newProduct: Product = {
      code: '',
      name: '',
      description: '',
      price: 0,
      qty: 0
    }
    this.productsInvoiced.push(newProduct)
  }

  removeProduct(){
    console.log(this.productsInvoiced)
  }

  calculateTotal(i: number): number {
    let quantity = this.productsInvoiced[i].qty
    let price = this.productsInvoiced[i].price
    return quantity * price;
  }

  getCustomerList() {
    this.customerService.getAllCustomers().subscribe({
      next: response => {
        this.customerList = this.sortService.mergeSort(response, 'companyName')
      },
      error: error => {
        this.toastr.error('Error fetching customers:', error)
      }
    });
  }

  deleteProduct() {
    alert("Deleted")
  }
}

//TODO : Add input with search functionallity both in Company and Product Selectors

