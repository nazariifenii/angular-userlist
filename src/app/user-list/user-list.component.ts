import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  
  userList: any = [];
  orgsList: any = [];
  defaultArray: any = [];
  showUsers: boolean = true;
  curPage : number;
  pageSize : number;

  constructor(private httpClient: HttpClient) {
    this.curPage = 1;
    this.pageSize = 10;
   };

  ngOnInit() {
    this.getUsers();
  }

  numberOfPages(){
    return Math.ceil(this.userList.length / this.pageSize);
  };

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
          this.curPage = 1;
        }
      })
  }
}
