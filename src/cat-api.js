import axios from 'axios';

export function fetchBreeds() {
  return axios
    .get(`https://api.thecatapi.com/v1/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}

// export function fetchBreeds() {
//   fetch('https://api.thecatapi.com/v1/breeds')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Data handling
//       response => response.data;
//     })
//     .catch(error => {
//       // Error handling
//     });
// }

// export function fetchCatByBreed(breedId) {
//   fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Data handling
//     })
//     .catch(error => {
//       // Error handling
//     });
// }
