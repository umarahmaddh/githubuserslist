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
  constructor(private route: ActivatedRoute, private service: UserListService) {

  }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.service.userList().subscribe((res: any) => {
      this.users = res
      console.log(this.users);
      this.service.userDetail(this.users[this.userId].url).subscribe(detailRes => {
        this.user = detailRes;
        console.log('single user', this.user);
      })
    })
  }

  onNext(id: number) {
    // this.service.userDetail(this.users[id + 1].url).subscribe(detailRes => {
    //   this.user = detailRes;
    //   console.log('single user next', this.user);
    // })
  }
  onPrev(id: number) {
    // this.service.userDetail(this.users[id - 1].url).subscribe(detailRes => {
    //   this.user = detailRes;
    //   console.log('single user prev', this.user);
    // })
  }
}
