import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../profile/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  regtnitems:any=[]
  registrations:any=[]
  profile:any

  constructor(private fb:FormBuilder,private ds:DataService,private api:ApiService) { }

  regForm=this.fb.group({uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
mail:['',[Validators.required,Validators.pattern('[a-zA-Z1-9\@.]+')]],
qual:['',[Validators.required,Validators.pattern('[a-zA-Z\.]+')]],
num:['',[Validators.required,Validators.pattern('[0-9]+')]],
loc:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\().]+')]],
crs:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
mod:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]]
})

  ngOnInit(): void {
    this.api.login().subscribe(
      (data:any)=>{
        this.registrations=data.profiles
      }
    )
  }

  registration(profile:any){
    console.log(this.regForm);

    var uname=this.regForm.value.uname
    var mail=this.regForm.value.mail
    var qual=this.regForm.value.qual
    var num=this.regForm.value.num
    var loc=this.regForm.value.loc
    var crs=this.regForm.value.crs
    var mod=this.regForm.value.mod
    
    if(this.regForm.valid){

      console.log(this.regForm.get('mail')?.errors);

      this.ds.registration(uname,mail,qual,num,loc,crs,mod)

      this.api.registration(profile)  //api


      .subscribe((result:any)=>{
        alert(result.message)


      },

      result=>{
        alert(result.error.message)
      }
      )
      
    }

  }

}
