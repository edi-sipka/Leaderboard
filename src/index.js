import './style.css';
import { refresh, display, addList } from './api.js';

const refreshing = document.getElementById('refresh');
const submit = document.getElementById('submit');

display();

refreshing.addEventListener('click', refresh);
submit.addEventListener('click', addList);

console.log(refreshing);
