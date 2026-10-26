import { Component, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  count1:any = signal(10)

todos: Todo[] = [];
  newTodo = '';

  counterVal$ : Observable<number> = new Observable<number>();

constructor(private store:Store<any>,) {  
    this.counterVal$ = this.store.pipe(select('bhushan'));
  }

  addTodo() {
    const value = this.newTodo.trim();
    if (!value) return;

    this.todos = [
      ...this.todos,
      { id: Date.now(), title: value, completed: false }
    ];

    this.newTodo = '';
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  trackById(index: number, item: Todo) {
    return item.id;
  }
}
