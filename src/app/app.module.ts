import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MainComponent } from './components/main/main.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TodoTableComponent } from './components/todo-table/todo-table.component'
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, MainComponent, TodoTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})

// @ts-ignore
export class AppModule {}
