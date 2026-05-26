import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './constant/interface';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

    private userRole = new BehaviorSubject<any>(null);
    currentUserRole$ = this.userRole.asObservable();

  setUserRole(name: any) {
    this.userRole.next(name);
  }

  constructor(private http: HttpClient) { }

  getTableData(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(map((data:any[])=>{
      return data.slice(0,5);
    }));
  }

  getData(){
    return this.http.get<Employee[]>('http://localhost:3000/posts');
  }
  
  postData(item:Employee[]){
    return this.http.post<Employee[]>('http://localhost:3000/posts', item);
  }
  
  updateData(id:any, item:Employee){
    return this.http.put<Employee[]>(`http://localhost:3000/posts/${id}`, item);
  }
  
  deleteData(id:any){
    return this.http.delete<Employee[]>(`http://localhost:3000/posts/${id}`);
  }
  
  getData1(role:any){
    return this.http.get<Employee[]>(`http://localhost:3000/posts?role=${role}`);
  }


  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(map((data:any)=>{
      return data.slice(0,4);
    }));
  }
  postTodos(data:any){
    return this.http.post('https://jsonplaceholder.typicode.com/todos', data)
  }
  updateTodos(id:any, data:any){
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`, data)
  }
  deleteTodos(id:any){
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

}
