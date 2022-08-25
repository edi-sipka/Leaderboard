import './style.css';
import { refresh, display, addList } from './api.js';

const refreshing = document.getElementById('refresh');
const submit = document.getElementById('submit');

// Display all API input data 
display();

// When click on refresh, new data is present. 
refreshing.addEventListener('click', refresh);

// When click on submit, new data is adding. 
submit.addEventListener('click', addList);
