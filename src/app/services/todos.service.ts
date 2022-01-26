import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { v4 as uuidV4 } from 'uuid'
import { EStatuses } from '../../enums/EStatuses'
import { ECategories } from '../../enums/ECategories'
import moment from 'moment'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  apiURL = 'http://localhost:5000/api'

  listTodos(): Observable<any> {
    return this.http.get(`${this.apiURL}/todos`)
  }

  createTodo(): Observable<any> {
    return this.http.post(
      `${this.apiURL}/todos`,
      this.temporaryCreateRandomTodo()
    )
  }

  temporaryCreateRandomTodo(): any {
    return {
      id: uuidV4(),
      title: 'randomly created',
      description: 'randomly described',
      status: EStatuses.DONE,
      category: ECategories.SMALL,
      dateAdded: moment(),
      dateCompleted: moment(),
      assigned: { name: 'simon', email: 'simon@email.com' },
      assignee: { name: 'mike', email: 'mike@email.com' },
    }
  }
}
