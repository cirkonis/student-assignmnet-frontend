import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  apiURL = 'http://localhost:5000/api'

  listTodos(): Observable<any> {
    return this.http.get(`${this.apiURL}/todos`)
  }

  // Error handling
  // handleError(error: any) {
  //   let errorMessage = ''
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
  //   }
  //   window.alert(errorMessage)
  //   return throwError(errorMessage)
  // }
}
