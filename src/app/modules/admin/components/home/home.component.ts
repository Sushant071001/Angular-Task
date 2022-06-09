import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService,private userData:UserdataService) {}

  ngOnInit(): void {
  }
  logout(): void {
    this.auth.logout();
  }

  
}
