import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ITodo } from '../../interfaces/ITodo'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  apiURL = 'https://student-app-api-dot-sharkcell.ew.r.appspot.com/api'

  listTodos(): Observable<any> {
    return this.http.get(`${this.apiURL}/todos`)
  }

  getTodo(id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/todos/${id}`)
  }

  createTodo(todo: ITodo): Observable<any> {
    return this.http.post(`${this.apiURL}/todos`, todo)
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/todos/${id}`)
  }

  updateTodo(todo: ITodo): Observable<any> {
    return this.http.put(`${this.apiURL}/todos`, todo)
  }
}
