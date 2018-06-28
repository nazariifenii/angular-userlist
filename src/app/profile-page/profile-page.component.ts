import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  username: string;
  private sub: any;
  userInfo: any = [];
  followersList: any = [];
  subscriptionsList: any = [];
  organizationsList: any = [];

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['id'];
      console.log(this.username);
    });
    this.getUserInfo();
    this.getFollowers();
    this.getSubscriptions();
    this.getOrganizations();
  }

  getUserInfo() {
    this.httpClient.get(`https://api.github.com/users/${this.username}`)
      .subscribe((data: any[]) => {
        this.userInfo = data;
      })
  }

  getFollowers() {
    this.httpClient.get(`https://api.github.com/users/${this.username}/followers`)
      .subscribe((data: any[]) => {
        this.followersList = data; 
      })
  }

  getSubscriptions() {
    this.httpClient.get(`https://api.github.com/users/${this.username}/subscriptions`)
      .subscribe((data: any[]) => {
        this.subscriptionsList = data; 
        console.log(data);
      })
  }

  getOrganizations() {
    this.httpClient.get(`https://api.github.com/users/${this.username}/orgs`)
      .subscribe((data: any[]) => {
        this.organizationsList = data; 
        console.log(data);
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
