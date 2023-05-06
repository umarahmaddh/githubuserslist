import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  userDetail:any={};
  constructor(private router: Router, private service: UserListService) {

  }

  onButtonClick(id: number) {
    this.router.navigate(['/profile-page'],{queryParams: { id: id }});
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['user'].currentValue){
      this.service.userDetail(changes['user'].currentValue.login).subscribe(detailRes => {
        this.userDetail =detailRes;
      })
    }
    
  }
}
