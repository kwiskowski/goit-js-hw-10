import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_xSM8F63uiCkUaigfVuS3xKGQfLylnItXSVq0tJtMbPf085967VBhZ1Nlohh8af31';

import SlimSelect from 'slim-select';
import '../node_modules/slim-select/dist/slimselect.css';

import Notiflix from 'notiflix';
Notiflix.Notify.init({
  position: 'center-top',
});

import { fetchBreeds, fetchCatByBreed } from './cat-api';

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

// Żądanie używające nagłówków wyglądałoby tak:

// fetch("https://jsonplaceholder.typicode.com/users", {
//   headers: {
//     Accept: "application/json",
//   },
// }).then(response => {
//   // ...
// });

document.querySelector('select.breed-select');
