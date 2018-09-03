import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetail: any;

  constructor(private router:Router, private userService : UserService) 
  { }

  ngOnInit() {
    this.userService.GetUserDetail().subscribe((data:any)=>{
      this.userDetail = data;
    });
  }

  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login'])
  }
}
