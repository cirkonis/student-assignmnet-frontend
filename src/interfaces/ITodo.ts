import { IUser } from './IUser'
import { ECategories } from '../enums/ECategories'
import { EStatuses } from '../enums/EStatuses'

export interface ITodo {
  id?: string
  title: string
  assignee: IUser
  assigned: IUser
  category: ECategories
  status: EStatuses
  description: string
  dateAdded: string
  dateCompleted: string
}
