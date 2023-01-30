import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  // regtnitems:any=[]
  // registrations:any=[]
  // profile:any

  constructor(private fb:FormBuilder,private ds:DataService, private router:Router) { }

  regForm=this.fb.group({uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
mail:['',[Validators.required,Validators.pattern('[a-zA-Z1-9\@.]+')]],
qual:['',[Validators.required,Validators.pattern('[a-zA-Z\.]+')]],
num:['',[Validators.required,Validators.pattern('[0-9]+')]],
loc:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\().]+')]],
crs:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
mod:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]]
})

bookForm=this.fb.group({name:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
location:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
date:['',[Validators.required]],
tym:['',[Validators.required]],
number:['',[Validators.required,Validators.pattern('[0-9]+')]]})


  ngOnInit(): void {
    // this.api.login().subscribe(
    //   (data:any)=>{
    //     this.registrations=data.profiles
    //   }
    // )
    // this.api.getprofile().subscribe(data=>{
    //   this.profile=data
    //   console.log(this.profile);
      
    // })
    this.getDate()

  }

  registration(){
    console.log(this.regForm);

    var uname=this.regForm.value.uname
    var mail=this.regForm.value.mail
    var qual=this.regForm.value.qual
    var num=this.regForm.value.num
    var loc=this.regForm.value.loc
    var crs=this.regForm.value.crs
    var mod=this.regForm.value.mod
    
    if(this.regForm.valid){

      // console.log(this.regForm.get('mail')?.errors);


      this.ds.registration(uname,mail,qual,num,loc,crs,mod)



      .subscribe((result:any)=>{
        alert(result.message)
      },

      result=>{
        alert(result.error.message)
      }
      )
      
    }

  }

  book(){
    if(this.bookForm.valid){
      alert('Your appointment is saved')
      this.router.navigateByUrl('home')

    }
else{
  alert('Invalid attempt')
}
  }




minDate=""

getDate(){
  var date:any = new Date();
  var toDate:any = date.getDate();
  if(toDate < 10){
    toDate="0"+toDate;
  }
  var month = date.getMonth() + 1;
  if(month < 10){
    month = "0"+ month;
  }
  var year = date.getFullYear();
  this.minDate = year + "-" + month + "-" + toDate;
  console.log(this.minDate);
  
}

}
