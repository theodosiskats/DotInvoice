import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from "ngx-toastr";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { TableModule } from 'primeng/table';
import { TypeaheadModule } from "ngx-bootstrap/typeahead";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      tapToDismiss: true,
      countDuplicates: true,
      resetTimeoutOnDuplicate: true,
      includeTitleDuplicates: true,
    }),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    TypeaheadModule.forRoot(),
    TableModule
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    TabsModule,
    TypeaheadModule,
    TableModule
  ]
})
export class SharedModule { }
