import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  baseurl = environment.baseUrl;
  constructor(private http: HttpClient, private router: Router) {

  }
  userList() {
    const url = `${this.baseurl}/users`;
    return this.http.get(url);
  }
  userDetail(username: string) {
    const url = `${this.baseurl}/users/${username}`;
    return this.http.get(url);
  }
}
