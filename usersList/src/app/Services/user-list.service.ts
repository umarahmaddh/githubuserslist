import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  url = environment.baseUrl;
  token = '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';
  constructor(private http: HttpClient, private router: Router) {

  }
  userList() {
    const urlWithToken = `${this.url}/users`;
    return this.http.get(urlWithToken);
  }
  userDetail(userUrl: string) {
    return this.http.get(userUrl);
  }
}
