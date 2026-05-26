import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {

  url = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http:HttpClient) { }

getComments(postId:any){
  return this.http.get(`${this.url}?postId=${postId}`)
}


  // promise based api call
  getPromiseData(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments').toPromise();
  }


}
