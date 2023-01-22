import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  registerForm=this.fb.group({uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
mail:['',[Validators.required,Validators.pattern('[a-zA-Z1-9\@.]+')]],
num:['',[Validators.pattern('[0-9]+')]],
pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\@#*%]+')]]})

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm);


    var uname=this.registerForm.value.uname
    var mail=this.registerForm.value.mail
    var num=this.registerForm.value.num
    var pswd=this.registerForm.value.pswd
 
    if(this.registerForm.valid){

      
       console.log(this.registerForm.get('mail')?.errors);
        
        this.ds.register(uname,mail,num,pswd)
     .subscribe((result:any)=>{
       alert(result.message);
       this.router.navigateByUrl('')
     },

     result=>{
      alert(result.error.message)
      this.router.navigateByUrl('')
     })
      }
     
  }
}



