import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchStoresService {
url="https://jsonplaceholder.typicode.com/users"
  constructor(private http: HttpClient) { }
  
  getStores():Observable<any>{
    return this.http.get(this.url);
  }

}
