import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  loginForm=this.fb.group({mail:['',[Validators.required,Validators.pattern('[a-zA-Z1-9\@.]+')]],
pswd:['',[Validators.pattern('[a-zA-Z0-9\@#*%]+')]]})

  ngOnInit(): void {
  }

  login(){

    console.log(this.loginForm);
    
    var mail=this.loginForm.value.mail
    var pswd=this.loginForm.value.pswd
   
   if(this.loginForm.valid){
     this.ds.login(mail,pswd)

     .subscribe((result:any)=>{
      localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
      localStorage.setItem('currentAcno',JSON.stringify(result.currentMail));
      localStorage.setItem('token',JSON.stringify(result.token));

       alert(result.message);
       this.router.navigateByUrl('home')
     },
     result=>{
       alert(result.error.message)
     }
     )
       
   }
   
   
}


}
