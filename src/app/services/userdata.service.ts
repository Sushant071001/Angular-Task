import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url = "https://admin.eniola.app/api/v1/login";

  constructor(private http:HttpClient) { }

  users(){
    return this.http.get(this.url);
  }

  userSave(data: object){
    return this.http.post(this.url, data)
    
  }
}
