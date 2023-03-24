import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastrModule} from "ngx-toastr";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

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
    SidebarModule,
    ButtonModule
  ],
  exports: [
    ToastrModule,
    BsDropdownModule,
    SidebarModule,
    ButtonModule
  ]
})
export class SharedModule { }
