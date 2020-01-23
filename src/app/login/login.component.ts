import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import{loginModel} from '../models/loginModel';
import{ActivatedRoute, Router} from '@angular/router';
import { MainService } from '../main.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  user:loginModel = new  loginModel();
  loginform:FormGroup;
  constructor(private m:MainService,private formBuilder:FormBuilder,private router:Router) {}

ngOnInit() {
     this.m.islog.next(false);
    this.loginform = this.formBuilder.group({   
    'email':[this.user.email,[Validators.required,Validators.email]],
    'password':[this.user.password,
    [Validators.required,Validators.minLength(6),Validators.maxLength(30)]]
 });
}
islog
onLoginSubmit(){
   alert(this.user.email+' '+this.user.password);
  this.m.login(this.loginform.value).subscribe();
   this.router.navigate(['/home']);
   this.m.islog.next(true);
  }
}
