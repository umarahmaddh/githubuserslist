import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  userId: any = 0;
  user: any;
  users: any = []
  userDetail: any = []
  globalIndex: any;
  constructor(private route: ActivatedRoute, private service: UserListService) {

  }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.service.userList().subscribe((res: any) => {
      this.users = res
      const singleUser = this.users.find((element: any) => element.id == parseInt(this.userId));
      this.service.userDetail(singleUser.url).subscribe(detailRes => {
        this.user = detailRes;
      })
    })
  }

  onNext(id: number) {
    this.users.forEach((element: any, index: number) => {
      if (element.id == id) {
        this.service.userDetail(this.users[index + 1].url).subscribe(detailRes => {
          this.user = detailRes;
          this.globalIndex = index + 1
        });
      }
    });
  }
  onPrev(id: number) {
    this.users.forEach((element: any, index: number) => {
      if (element.id == id) {
        this.service.userDetail(this.users[index - 1].url).subscribe(detailRes => {
          this.user = detailRes;
          this.globalIndex = index - 1
        });
      }
    });
  }
}
