import { Component, OnInit } from '@angular/core'
import { TodoTableDataSource } from './todo-table-data-source'
import { TodosService } from '../../services/todos.service'
import { ITodo } from '../../../interfaces/ITodo'
import { v4 as uuidV4 } from 'uuid'
import { EStatuses } from '../../../enums/EStatuses'
import { ECategories } from '../../../enums/ECategories'
import moment from 'moment'

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
    const randomTodo = {
      id: uuidV4(),
      title: 'randomly created',
      description: 'randomly described',
      status: EStatuses.DONE,
      category: ECategories.SMALL,
      dateAdded: moment().toString(),
      dateCompleted: moment().toString(),
      assigned: { name: 'simon', email: 'simon@email.com' },
      assignee: { name: 'mike', email: 'mike@email.com' },
    }
    this.todosService.createTodo(randomTodo).subscribe(() => {
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
