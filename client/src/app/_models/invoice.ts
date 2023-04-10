import {Product} from "./product";

export interface Invoice {
id: number,
invoiceNumber: number,
issueDate: Date,
dueDate: Date,
products: Product[],
subtotal: number,
shippingFees: number,
taxAmount: number,
taxRate: number,
totalAmount: number,
notes: string,
isCompleted: boolean,
paymentStatus: string,
customer: string,
}
