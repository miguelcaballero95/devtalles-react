import * as z from 'zod/v4';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: 'ADD_TODO', payload: string }
  | { type: 'TOGGLE_TODO', payload: number }
  | { type: 'DELETE_TODO', payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean()
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number()
});

export const getTasksInitialState = (): TaskState => {

  const localStorageState = localStorage.getItem('tasks-state');

  if (!localStorageState) {
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0
    }
  }

  // zod validation
  const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0
    }
  }

  return result.data;
}

export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {

  switch (action.type) {
    case 'ADD_TODO': {

      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }

      return {
        ...state,
        length: state.todos.length + 1,
        pending: state.pending + 1,
        todos: [...state.todos, newTodo]
      };
    }
    case 'TOGGLE_TODO': {
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
      });
      return {
        ...state,
        completed: updatedTodos.filter(todo => todo.completed).length,
        pending: updatedTodos.filter(todo => !todo.completed).length,
        todos: updatedTodos
      };
    }
    case 'DELETE_TODO': {
      const updatedTodos = state.todos.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        length: updatedTodos.length,
        completed: updatedTodos.filter(todo => todo.completed).length,
        pending: updatedTodos.filter(todo => !todo.completed).length,
        todos: updatedTodos
      };
    }
    default:
      return state;
  }
}