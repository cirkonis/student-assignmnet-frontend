import { ITodo } from './interfaces/ITodo'
import { ECategories } from './enums/ECategories'
import { EStatuses } from './enums/EStatuses'

export let todos: ITodo[] = [
  {
    id: '4de1aec9-58b7-4656-8256-db9ab55515af',
    title: 'test 1',
    assignee: {
      name: 'test_assignee',
      email: 'test_assignee@test.com',
    },
    assigned: {
      name: 'test_assigned',
      email: 'test_assigned@test.com',
    },
    category: ECategories.SMALL,
    description: 'small todo description',
    status: EStatuses.ASSIGNED,
    dateAdded: '00-00-00',
    dateCompleted: '00-00-00',
  },
  {
    id: 'ea653a90-57eb-4ebb-9215-e036e37f92d6',
    title: 'test 2',
    assignee: {
      name: 'test_assignee',
      email: 'test_assignee@test.com',
    },
    assigned: {
      name: 'test_assigned',
      email: 'test_assigned@test.com',
    },
    category: ECategories.IMPORTANT,
    description: 'important todo description',
    status: EStatuses.STUCK,
    dateAdded: '00-00-00',
    dateCompleted: '00-00-00',
  },
  {
    id: '70fe6abd-a589-4841-94dc-ec1528594b14',
    title: 'test 3',
    assignee: {
      name: 'test_assignee',
      email: 'test_assignee@test.com',
    },
    assigned: {
      name: 'test_assigned',
      email: 'test_assigned@test.com',
    },
    category: ECategories.URGENT,
    description: 'urgent todo description',
    status: EStatuses.IN_PROGRESS,
    dateAdded: '00-00-00',
    dateCompleted: '00-00-00',
  },
  {
    id: '717da2d53-b71b-4bf2-b52b-80bbb2d78e03',
    title: 'test 4',
    assignee: {
      name: 'test_assignee',
      email: 'test_assignee@test.com',
    },
    assigned: {
      name: 'test_assigned',
      email: 'test_assigned@test.com',
    },
    category: ECategories.IMPORTANT,
    description: 'done todo description',
    status: EStatuses.DONE,
    dateAdded: '00-00-00',
    dateCompleted: '00-00-00',
  },
]
