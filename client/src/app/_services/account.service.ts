import { Injectable } from '@angular/core';
import {env} from "../../environments/environment";
import {BehaviorSubject, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../_models/user";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = env.apiUrl
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
    console.log(this.baseUrl)
        const user = response;
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  setCurrentUser(user: User) {
    user.roles = []
    const roles = this.getDecodedToken(user.token).role
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles)
    localStorage.setItem('user', JSON.stringify(user))
    this.currentUserSource.next(user)
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  getDecodedToken(token: string){
    return JSON.parse(atob(token.split('.')[1]))
  }
}