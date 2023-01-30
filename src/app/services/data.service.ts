import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  register(username:any,mail:any,number:any,password:any){
     
    const data={username, mail,number, password}
    return this.http.post('http://localhost:3000/register',data)

  }


  login(mail:any,pswd:any){

    const data={
      mail,
      pswd
    }

    return this.http.post('http://localhost:3000/login',data)
    }



    registration(username:any,mail:any,qualification:any,number:any,place:any,course:any,mode:any){
      const data={
        username,mail,number,qualification,place,course,mode
      }
      return this.http.post('http://localhost:3000/registration',data)
    }


  
}
