import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  login(){
    return this.http.get('http://localhost:3000')
  }


  //add to profile
  registration(profile:any){
    const body={
      username:profile.username,
      mail:profile.mail,
      qualification:profile.qualification,
      number:profile.number,
      place:profile.place,
      course:profile.course,
      mode:profile.mode
    }
    return this.http.post('http://localhost:3000/registration',body)
  }

  getprofile(){
    return this.http.get('http://localhost:3000/getprofile')
  }
}
