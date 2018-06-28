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
  defaultArray: any = [];

  constructor(private httpClient: HttpClient) { };

  ngOnInit() {
    this.getUsers();
  }

  filterUser(event: any) {
    let inputData:any = event.target.value;
      this.userList = this.defaultArray;
      this.userList = this.userList.filter(user=>user.login.includes(inputData));
  }

  getUsers() {
    this.httpClient.get('https://api.github.com/users')
      .subscribe((data: any[]) => {
        if (data.length) {
          this.defaultArray = data;
          this.userList = this.defaultArray;
        }
        console.log(this.defaultArray);
      })
  }
  
  getOrganizations() {
    this.httpClient.get('https://api.github.com/organizations')
      .subscribe((data: any[]) => {
        if (data.length) {
          this.defaultArray = data;
          this.userList = this.defaultArray;
        }
        console.log(this.defaultArray);
      })
  }
}
