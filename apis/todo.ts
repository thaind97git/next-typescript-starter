import axios from 'axios';

export const getTodo = () =>
  axios.get('https://jsonplaceholder.typicode.com/todos');
