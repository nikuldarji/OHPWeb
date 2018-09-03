import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usermodel : User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userservice : UserService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm(null);
  }

  OnSubmit(form : NgForm) {
    this.userservice.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
        }
        else{
          this.toastr.error(data.Errors[0]);
        }
      });
  }

resetForm(form? : NgForm)
{
  if(form != null){
  form.reset();
  }
  
  this.usermodel = {
    ID:null,
    FirstName:'',
    LastName:'',
    Email:'',
    Password:'',
    Mobile:'',
    IsActive:false,
    IsAdmin :false
  }

}

}
 