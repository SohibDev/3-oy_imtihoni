// var elList = document.querySelector(".movieLists");
// let slicedMovies = movies.slice(0, 5);
// let normalizedArray = slicedMovies.map(function (item) {
//   return {
//     title: item.Title.toString(),
//     movieYear: item.movie_year,
//     categories: item.Categories.split("|"),
//     summary: item.summary,
//     imgUrl: `https://i3.ytimg.com/vi/${item.ytid}/sddefault.jpg`,
//     videoUrl: `https://www.youtube.com/watch?v=${item.ytid}`,
//     rating: item.imdb_rating,
//   };
// });

// let allCategories = [];
// for (const item of normalizedArray) {
//   let categoryArray = item.categories;
//   for (const oneCategory of categoryArray) {
//     if (!allCategories.includes(oneCategory)) {
//       allCategories.push(oneCategory);
//     }
//   }
// }

// let elForm = document.querySelector(".form");
// let elSelect = document.querySelector(".sortingDrama");

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
// });

// function renderOptions(array, place) {
//   place.innerHTML = null;
//   let optionByDrama = document.createElement("option");
//   optionByDrama.value = "All";
//   optionByDrama.textContent = "All";
//   place.appendChild(optionByDrama);

//   for (const item of array) {
//     let optionByDrama = document.createElement("option");
//     optionByDrama.value = item;
//     optionByDrama.textContent = item;
//     place.appendChild(optionByDrama);
//   }
//   for (let i = 0; i < place.length; i++) {
//     if (movies.item == place[i]) {
//     }
//   }
// }

// // renderOptions(allCategories, elSelect);

// var elMoviNum = document.querySelector(".moviNum");
// elMoviNum.textContent = slicedMovies.length;

// console.log(
//   normalizedArray.filter(function (item) {
//     console.log(item.categories);
//   })
// );
