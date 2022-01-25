import { Component } from '@angular/core'
import { todos } from '../../../data'
import { TodoTableDataSource } from './todo-table-data-source'

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent {
  displayedColumns: string[] = [
    'title',
    'description',
    'status',
    'category',
    'date-added',
    'date-completed',
    'assigned-by',
    'assigned-to',
  ]
  dataToDisplay = todos

  dataSource = new TodoTableDataSource(this.dataToDisplay)

  addDataTemp() {
    const randomElementIndex = Math.floor(Math.random() * todos.length)
    this.dataToDisplay = [...this.dataToDisplay, todos[randomElementIndex]]
    this.dataSource.setData(this.dataToDisplay)
  }

  removeDataTemp() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1)
    this.dataSource.setData(this.dataToDisplay)
  }
}
