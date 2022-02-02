import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MainComponent } from './components/main/main.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TodoTableComponent } from './components/todo-table/todo-table.component'
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog'
import { HttpClientModule } from '@angular/common/http'
import { TodoFormComponent } from './components/todo-form/todo-form.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoTableComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})

// @ts-ignore
export class AppModule {}
