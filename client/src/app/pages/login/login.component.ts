import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../../_services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {}

  constructor(private router: Router, private accountService: AccountService) { }

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/')
        this.model = {}
      }
    });
  }

}
