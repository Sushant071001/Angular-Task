import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  registerForm = new FormGroup({});
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  users: any;

  constructor(private auth: AuthService, private router: Router,
    private userData:UserdataService) {   
    }

  ngOnInit(): void {
    
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  onSubmit(data:object): void {
    if (this.loginForm.valid) {
      
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          // console.log(this.loginForm.value);
          this.router.navigate(['/admin']);
          
        },
        (err: Error) => {
          alert(err.message);
        }
      );
      
    }
    this.userData.userSave(data).subscribe((result)=>{
      // console.ta(result);
      this.users = result;
      console.table(this.users.data);        
    })
  }
}
