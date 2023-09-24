import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit{

  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() : void {
    this.route.queryParams.subscribe((queryP) => {
      this.email = queryP['email'];
    })
  }

}
