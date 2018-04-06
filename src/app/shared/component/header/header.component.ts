import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = '';
  isLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  	this.isLoggedIn = this.authService.isLoggedIn();
    this.user = window.localStorage.getItem('user');
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
