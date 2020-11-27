// type Todo = {
//   readonly id: number
//   readonly text: string
//   readonly done: boolean
// }


// Array Types, Literal Types, and Intersection Types

// NOTE : You can use exact values when specifying a type. This is called literal types.

// type Todo = Readonly<{
//   id: number
//   text: string
//   done: boolean
// }>

// Override the done property of Todo
type CompletedTodo = Todo & {
  readonly done: true
}

const foo: Todo = {
  id: 1,
  text: '…',
  done: true
}

// Parameter "todo" must match the Todo type
function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}

const todos = [
  { id: 1, text: 'First todo', done: false },
  { id: 2, text: 'Second todo', done: false }
]

// Takes an array of todo items and returns
// a new array where "done" is all true
function completeAll(todos : readonly Todo[]) : CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    done: true
  }))
}

// Use of UNION TYPES and Optional properties


const todosWithPlaces = [
  {
    id: 1,
    text: 'Do laundry',
    done: false,
    place: 'home'
  },
  {
    id: 2,
    text: 'Email boss',
    done: false,
    place: 'work'
  },
  {
    id: 3,
    text: 'Go to gym',
    done: false,
    place: { custom: 'Gym' }
  },
  {
    id: 4,
    text: 'Buy milk',
    done: false,
    place: { custom: 'Supermarket' }
  },
  { id: 5, text: 'Read a book', done: false }
]




type Place = 'home' | 'work' | { custom: string }
// They all compile
const place1: Place = 'home'
const place2: Place = 'work'
const place3: Place = { custom: 'Gym' }
const place4: Place = { custom: 'Supermarket' }


// update of Type

type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  place?: Place  // optional property
}>


// Correct implementation
function placeToString(place: Place): string {
  if (place === 'home') {
    return ' Home'
  } else if (place === 'work') {
    return ' Work'
  } else {
    // place is guaranteed to be { custom: string }
    return ' ' + place.custom
  }
}