import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  id_count: number = 0;

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onLogin() {
    console.log('user login data: ', this.loginForm.value);
    this.loginForm.value['id'] = 1;
    this._loginService
      .saveUserLoginDetails(this.loginForm.value)
      .subscribe((logindata: any) => {
        console.log('login sucessfully login!');
      });
    this._router.navigateByUrl('users');
  }
}
