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

const breedSelect = document.querySelector('select.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('p.error');
const catInfo = document.querySelector('div.cat-info');

error.style.display = 'none';

function selectCat(e) {
  const breedId = e.target.value;
  if (breedId) {
    // loader.style.display = 'inline-block';
    Notiflix.Loading.standard('Loading...');
    fetchCat(breedId);
  } else {
    // loader.style.display = 'none';
    Notiflix.Loading.remove();
  }
}
breedSelect.addEventListener('change', selectCat);

function fetchCat(breedId) {
  fetchCatByBreed(breedId)
    .then(response => {
      const catItemInfo = response;
      showCat(catItemInfo);
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Upps! Coś poszło nie tak. Odśwież stronę jeszcze raz.'
      );
      return error;
    })
    .finally(() => {
      // loader.style.display = 'none';
      Notiflix.Loading.remove();
    });
}

function showCat(catItemInfo) {
  const { name, description, temperament } = catItemInfo[0].breeds[0];
  const { url } = catItemInfo[0];
  const catInfoHTML = `
    <img class="postImage" src="${url}" alt="image of a ${name}">
    <div class="postWrapper">
      <h2>${name}</h2>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Temperament:</strong> ${temperament}</p>
    </div>
  `;
  catInfo.innerHTML = catInfoHTML;
  catInfo.style.display = 'block';
}

function fillCatList(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

function initCatApp() {
  Notiflix.Loading.standard('Loading...');
  // loader.style.display = 'inline-block';
  fetchBreeds()
    .then(breeds => {
      fillCatList(breeds);
      new SlimSelect({
        select: '.breed-select',
      });
      Notiflix.Notify.info(
        'Wybierz rasę z listy, aby wyświetlić więcej informacji.'
      );
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      // loader.style.display = 'none';
      Notiflix.Loading.remove();
    });
}
document.addEventListener('DOMContentLoaded', () => {
  initCatApp();
});
