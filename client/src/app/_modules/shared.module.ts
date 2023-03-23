import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastrModule} from "ngx-toastr";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";



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
    BsDropdownModule.forRoot()
  ],
  exports: [
    ToastrModule,
    BsDropdownModule
  ]
})
export class SharedModule { }
