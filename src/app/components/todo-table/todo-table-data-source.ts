import { ITodo } from '../../../interfaces/ITodo'
import { DataSource } from '@angular/cdk/collections'
import { Observable, ReplaySubject } from 'rxjs'

export class TodoTableDataSource extends DataSource<ITodo> {
  private _dataStream = new ReplaySubject<ITodo[]>()

  constructor(initialData: ITodo[]) {
    super()
    this.setData(initialData)
  }

  connect(): Observable<ITodo[]> {
    return this._dataStream
  }

  disconnect() {}

  setData(data: ITodo[]) {
    this._dataStream.next(data)
  }
}
