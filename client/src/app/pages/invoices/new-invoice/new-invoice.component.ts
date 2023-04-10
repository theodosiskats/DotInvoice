import {Component, ViewChild} from '@angular/core';
import {Invoice} from "../../../_models/invoice";
import {Product} from "../../../_models/product";
import {Customer} from "../../../_models/customer";
import {CustomerService} from "../../../_services/customer.service";
import {InvoiceService} from "../../../_services/invoice.service";
import {ProductService} from "../../../_services/product.service";
import {ToastrService} from "ngx-toastr";
import {SortService} from "../../../_services/utils/sorting.service";
import {FiltersComponent} from "../../shared-components/filters/filters.component";

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent {
  @ViewChild('filters') filters: FiltersComponent
  invoice: Invoice | undefined
  customerList: Customer[] = []
  productList: Product[] = []
  productsInvoiced: Product[] = []
  filteredList: any[] = [];
  selectedCustomerId: string = '';

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

  getCustomerList() {
    this.customerService.getAllCustomers().subscribe({
      next: response => {
        this.customerList = this.sortService.mergeSort(response, 'companyName')
        this.filters.items = this.customerList;
      },
      error: error => {
        this.toastr.error('Error fetching customers:', error)
      }
    });
  }

  deleteProduct() {

  }
}

