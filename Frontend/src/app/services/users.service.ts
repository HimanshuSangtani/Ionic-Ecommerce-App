import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../classes/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user:User[]
  url="http://localhost:3000/api/register"
  constructor(private http: HttpClient) { }
  
  postUsers(user:User):Observable<any>{
    return this.http.post(this.url,user);
  }
}
