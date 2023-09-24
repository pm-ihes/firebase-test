import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor (private auth: AuthService, private router: Router) {}

  email = '';

  ngOnInit(): void {
    this.email = this.auth.getAuthFire()?.email || '';
  }

  logout () {
    this.auth.logout();
  }

}
