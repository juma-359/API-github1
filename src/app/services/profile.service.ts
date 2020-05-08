import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';


@Injectable()
export class ProfileService {

  private  username:string;
  private clientid = '';
  private clientsecret = 'cb6e097f05f9496b31256123e5271a6530206671';
  
  constructor(private http:HttpClient) {
    console.log("Your service is ready");
    this.username = 'juma-359';
   }
  
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id" + this.clientid + "&client_secret=" + this.clientsecret)
    
   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id" + this.clientid + "&client_secret=" + this.clientsecret)
    
   }
   updateProfile(username:string){
    this.username = username;
    }

}
