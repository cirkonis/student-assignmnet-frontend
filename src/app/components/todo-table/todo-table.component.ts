import { Component } from '@angular/core'
import { todos } from '../../../data'

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
  dataSource = todos
}
