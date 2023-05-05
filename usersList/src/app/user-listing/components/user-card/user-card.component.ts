import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  constructor(private router: Router) {

  }
  onButtonClick(id: number) {
    this.router.navigate(['/profile-page', { id: id }]);
  }
  ngOnInit(): void {
    console.log('just user', this.user)
  }
}
