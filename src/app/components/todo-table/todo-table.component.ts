import { Component, OnInit } from '@angular/core'
import { TodoTableDataSource } from './todo-table-data-source'
import { TodosService } from '../../services/todos.service'
import { ITodo } from '../../../interfaces/ITodo'

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent implements OnInit {
  dataToDisplay: ITodo[] = []
  dataSource!: TodoTableDataSource
  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.loadTodos()
  }

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

  loadTodos() {
    this.todosService.listTodos().subscribe((data: any) => {
      this.dataToDisplay = data.data
      this.dataSource = new TodoTableDataSource(this.dataToDisplay)
    })
  }

  addRandomTodo() {
    this.todosService.createTodo().subscribe(() => {
      this.loadTodos()
    })
  }

  removeDataTemp() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1)
    this.dataSource.setData(this.dataToDisplay)
  }
}
