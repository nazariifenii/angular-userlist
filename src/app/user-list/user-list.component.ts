import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  items: number = 4;
  userList: any = [];
  orgsList: any = [];
  defaultArray: any = [];
  showUsers: boolean = true;

  constructor(private httpClient: HttpClient) { };

  ngOnInit() {
    this.getUsers();
  }

  filterUser(event: any) {
    let inputData: any = event.target.value;
    this.userList = this.defaultArray;
    this.userList = this.userList.filter(user => user.login.includes(inputData));
  }

  getUsers() {
    this.httpClient.get('https://api.github.com/users')
      .subscribe((data: any[]) => {
        if (data.length) {
          this.defaultArray = data;
          this.userList = data.filter(user => user.type === "User");
          this.orgsList = data.filter(user => user.type === "Organization");
        }
        console.log(this.userList);
      })
  }
}
