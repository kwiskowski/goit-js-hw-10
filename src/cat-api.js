import axios from 'axios';

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
//       // console.log(Object.keys(data));
//       //   console.log(Object.values(data));
//       console.log(data);
//     })
//     .catch(error => {
//       // Error handling
//     });
// }
// fetchBreeds();

export function fetchBreeds() {
  return axios
    .get(`https://api.thecatapi.com/v1/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}
fetchBreeds();

export function fetchCatByBreed(breedId) {
  fetch('https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      // Data handling
      // console.log(Object.keys(data));
      //   console.log(Object.values(data));
      console.log(data);
    })
    .catch(error => {
      // Error handling
    });
  fetchCatByBreed(abys);
}
