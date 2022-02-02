import { Component, OnInit } from '@angular/core'
import { TodoTableDataSource } from './todo-table-data-source'
import { TodosService } from '../../services/todos.service'
import { ITodo } from '../../../interfaces/ITodo'
import { EStatuses } from '../../../enums/EStatuses'
import { ECategories } from '../../../enums/ECategories'
import moment from 'moment'
import { MatDialog } from '@angular/material/dialog'
import { TodoFormComponent } from '../todo-form/todo-form.component'

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent implements OnInit {
  dataToDisplay: ITodo[] = []
  dataSource!: TodoTableDataSource
  constructor(private todosService: TodosService, public dialog: MatDialog) {}

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

  createTodo() {
    const nullTodo = {
      title: null,
      description: null,
      status: null,
      category: null,
      dateAdded: null,
      dateCompleted: null,
      assigned: null,
      assignee: null,
    }
    const dialogRef = this.dialog.open(TodoFormComponent, {
      data: { title: 'Create', todo: nullTodo },
    })
    dialogRef.afterClosed().subscribe(() => {
      console.log('Works????')
      this.loadTodos()
    })
  }

  removeRandomTodo() {
    const randomTodo =
      this.dataToDisplay[Math.floor(Math.random() * this.dataToDisplay.length)]
    this.todosService.deleteTodo(randomTodo.id!).subscribe(() => {
      this.loadTodos()
    })
  }

  updateRandomTodo() {
    const randomTodoId =
      this.dataToDisplay[Math.floor(Math.random() * this.dataToDisplay.length)]
        .id
    const randomTodo = {
      id: randomTodoId,
      title: 'randomly updated',
      description: 'randomly described',
      status: EStatuses.IN_PROGRESS,
      category: ECategories.SMALL,
      dateAdded: moment().toString(),
      dateCompleted: moment().toString(),
      assigned: { name: 'simon', email: 'simon@email.com' },
      assignee: { name: 'mike', email: 'mike@email.com' },
    }
    this.todosService.updateTodo(randomTodo).subscribe(() => {
      this.loadTodos()
    })
  }
}
