import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private service: UserListService) {
  }
  users: any = []
  userDetail: any = [];
  ngOnInit(): void {
    this.service.userList().subscribe(res => {
      this.users = res;
      this.users.forEach((user: any) => {
        this.service.userDetail(user.url).subscribe(detailRes => {
          this.userDetail.push(detailRes)
        })
      });
    })
  }
}
