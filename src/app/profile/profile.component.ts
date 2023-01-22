import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
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

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.getprofile().subscribe(
      (data:any)=>{
        this.profile=data.profiles
        if(this.profile.length==0){
          this.emsg='Empty Profile'
        }
      },
      (data:any)=>{
        this.emsg=data.console.error.message
      }
    )

  }
  
}