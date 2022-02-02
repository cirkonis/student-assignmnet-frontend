import { Component, Inject, OnInit } from '@angular/core'
import { ITodo } from '../../../interfaces/ITodo'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ECategories } from '../../../enums/ECategories'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todoForm!: FormGroup

  categories = ECategories

  users = [
    {
      name: 'test1',
      email: 'test1.email',
    },
    {
      name: 'test2',
      email: 'test2.email',
    },
  ]

  constructor(
    public dialogRef: MatDialogRef<TodoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; todo: ITodo },
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    let todo: ITodo = this.data.todo
    this.todoForm = this.formBuilder.group({
      title: [todo.title, [Validators.required]],
      description: [todo.description, [Validators.required]],
      assigned: [todo.assigned, [Validators.required]],
      assignee: [todo.assignee, [Validators.required]],
      category: [
        todo.category,
        [Validators.min(0), Validators.max(3), Validators.required],
      ],
    })
  }

  onSubmit() {
    const result = this.todoForm.getRawValue()
    this.dialogRef.close({
      title: result.title,
      description: result.description,
      assigned: result.assigned,
      assignee: result.assignee,
      category: result.category,
    })
  }
}
