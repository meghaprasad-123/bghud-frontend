import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // alluser:any
  profile:any
  emsg:any
mail:any
  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.getprofile().subscribe(
      (data:any)=>{
        this.profile=data.profiles
console.log(this.profile);


        if(this.profile.length==0){
          this.emsg='Empty Profile'
        }
      },
      (data:any)=>{
        this.emsg=data.error.message
      }
    )

  }
  
}