import { Component, OnInit } from '@angular/core';
import{RegisterModel} from '../models/register.model';
import{FormGroup,FormBuilder,Validator, Validators, MinLengthValidator}  from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    hide=true;
    user:RegisterModel = new  RegisterModel();
    registerform:FormGroup;
    constructor(private formBuilder:FormBuilder) {}
   
   ngOnInit(){
   this.registerform = this.formBuilder.group({
     'name':[this.user.name,[Validators.required]],
     'email':[this.user.email,[Validators.required,Validators.email]],
     'password':[this.user.password,
      [Validators.required,Validators.minLength(6),Validators.maxLength(30)]]
   });
  }

  onRegisterSubmit(){
    alert(this.user.name+' '+this.user.email+' ' +this.user.password);
  }
}
