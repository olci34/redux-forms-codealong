export default function manageTodo(state = {
  todos: [],
}, action) {
  debugger
  switch (action.type) {
  case 'ADD_TODO':
    console.log({todos: [...state.todos, action.payload.text]});
    {todos: [...state.todos, action.payload.text]}
  default:
    return state;
  }
}
