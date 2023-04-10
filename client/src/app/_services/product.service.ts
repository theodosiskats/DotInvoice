import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getSampleProducts() {
    return [
      { name: 'Product 1', price: 10, qty: 0 },
      { name: 'Product 2', price: 15, qty: 0 },
      { name: 'Product 3', price: 20, qty: 0 },
      { name: 'Product 4', price: 5, qty: 0 },
      { name: 'Product 5', price: 8, qty: 0 }
    ];
  }
}
