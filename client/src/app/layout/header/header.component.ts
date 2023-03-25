import { Component } from '@angular/core';
import {AccountService} from "../../_services/account.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/members')
        this.model = {}
      }
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }
}
