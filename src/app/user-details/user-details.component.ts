import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../services/userdata.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  usersData: any[] = [];
  userName!: string;
  constructor(private _router: ActivatedRoute, private _userDataService: UserDataService) { }

  /**
   * Angular life cycle hook
   */
  ngOnInit(): void {
    this._router.params.subscribe((data: any) => {
      this.userName = data.username;
    })
    this._userDataService.getUserData()
    .subscribe((users: any) => {
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
  }

}
