import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from '../services/userdata.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) pagination!: MatPaginator;
  usersDataSource = new MatTableDataSource<any>();
  displayColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website', 'company'];

  constructor(private userDataService: UserDataService) { }

  /**
   * Angular life cycle hook
   */
  ngOnInit(): void {
    this.userDataService.getUserData()
      .subscribe((users: any) => {
       this.usersDataSource = users;
      })
  }

  /**
   * Angular life cycle hook
   */
  ngAfterViewInit(): void {
    this.usersDataSource.paginator = this.pagination;
  }

}
