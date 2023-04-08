import {Component, Input} from '@angular/core';
import {Table} from "primeng/table";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  @Input() data: any[] = []
  @Input() key1: string = ''
  @Input() key2: string = ''
  @Input() key3: string = ''
  @Input() key4: string = ''
  @Input() key5: string = ''
  @Input() key6: string = ''

  @Input() keyDisplay1: string = ''
  @Input() keyDisplay2: string = ''
  @Input() keyDisplay3: string = ''
  @Input() keyDisplay4: string = ''
  @Input() keyDisplay5: string = ''
  @Input() keyDisplay6: string = ''
  
  clear(table: Table) {
    table.clear();
  }
}
