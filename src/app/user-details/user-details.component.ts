import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserDataService } from '../services/userdata.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

  usersData: any[] = [];
  userName!: string;
  userForm!: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _userDataService: UserDataService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this.intialiseUserForm();
  }

  /**
   * Angular life cycle hook
   */
  ngOnInit(): void {
    this._route.params.subscribe((data: any) => {
      this.userName = data.username;
    });
    this._userDataService.getUserData().subscribe((users: any) => {
      this.usersData = users;
      this.findUser(this.userName);
    });
    
  }

  /**
   * from the username find the user from the raw data
   * @param username get the username from the router params
   */
  findUser(username: string) {
    const uniqueUser = this.usersData.filter((user: any) => {
      if (user.username === username) {
        return user;
      }
    });
    this.fillUserDetailsInForm(uniqueUser);
  }

  intialiseUserForm() {
    this.userForm = this._fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl(''),
      company: new FormControl(''),
      zipcode: new FormControl('')
    })
  }

  fillUserDetailsInForm(userDetails: any) {
    this.userForm.patchValue({
      name: userDetails[0].name,
      email: userDetails[0].email,
      phone: userDetails[0].phone,
      website: userDetails[0].website,
      company: userDetails[0].company.name,
      zipcode: userDetails[0].address.zipcode
    });
  }

  onSubmit() {
    console.log('Updated User Details: ', this.userForm.value);
    this._router.navigateByUrl('/users');
  }
}
