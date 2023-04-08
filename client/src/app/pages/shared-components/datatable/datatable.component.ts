import {Component, Input} from '@angular/core';
import {Customer} from "../../../_models/customer";
import {Table} from "primeng/table";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  @Input() data: Customer[] = []


  clear(table: Table) {
    table.clear();
  }
}
