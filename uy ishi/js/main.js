// var elMoviNum = document.querySelector(".moviNum");

// movies = movies.slice(0, 6);

// var elList = document.querySelector(".cat");
// let allCategory = [];
// let rates = [];
// let ratesTwo = [];
// for (const item of movies) {
//   var newLi = document.createElement("li");
//   newLi.setAttribute(
//     "class",
//     "col-12 col-sm-5 border border-secondary rounded cards my-5"
//   );

//   var newImg = document.createElement("img");
//   newImg.setAttribute("class", "pictures1");
//   newImg.setAttribute(
//     "src",
//     `https://i3.ytimg.com/vi/${item.ytid}/hqdefault.jpg`
//   );
//   newImg.width = "200";
//   newLi.appendChild(newImg);

//   var newH4 = document.createElement("h4");
//   newH4.setAttribute("class", "ps-3 pt-4");
//   newH4.textContent = item.Title;
//   newLi.appendChild(newH4);

//   var newDiv1 = document.createElement("div");
//   newDiv1.setAttribute("class", "d-flex flex-column");
//   newLi.appendChild(newDiv1);

//   var newDiv1In = document.createElement("div");
//   newDiv1In.setAttribute("class", "mt-4 ps-3 d-flex gap-2 align-middle");
//   newDiv1.appendChild(newDiv1In);

//   var calendarImg = document.createElement("img");
//   calendarImg.setAttribute("class", "icons");
//   calendarImg.src =
//     "https://img.freepik.com/free-icon/calendar-icon-black_318-9776.jpg?w=360";
//   newDiv1In.appendChild(calendarImg);

//   var newYear = document.createElement("span");
//   newYear.textContent = item.movie_year;
//   newDiv1In.appendChild(newYear);

//   var newDiv2In = document.createElement("div");
//   newDiv2In.setAttribute("class", "mt-4 ps-3 d-flex gap-2 align-middle");
//   newDiv1.appendChild(newDiv2In);

//   var starImg = document.createElement("img");
//   starImg.setAttribute("class", "icons");
//   starImg.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6lnz9at-XRVr0UNWYe9_TfBz_NuqHs5lrclOIi8&s";
//   newDiv2In.appendChild(starImg);

//   var newYear = document.createElement("span");
//   newYear.textContent = item.imdb_rating;
//   newDiv2In.appendChild(newYear);

//   var newDivSecond = document.createElement("div");
//   newDivSecond.setAttribute(
//     "class",
//     "d-flex px-3 py-4 justify-content-between"
//   );
//   newLi.appendChild(newDivSecond);

//   var newButton1 = document.createElement("a");
//   newButton1.setAttribute(
//     "href",
//     `https://www.youtube.com/watch?v=${item.ytid}`
//   );
//   newButton1.setAttribute("target", "_blank");
//   newButton1.setAttribute("class", "btn btn-outline-primary");
//   newButton1.textContent = "Watch trailer";
//   newDivSecond.appendChild(newButton1);

//   var newButton2 = document.createElement("a");
//   newButton2.setAttribute("type", "button");
//   newButton2.setAttribute("class", "btn btn-outline-secondary");
//   newButton2.textContent = "More info";
//   newDivSecond.appendChild(newButton2);

//   var newButton3 = document.createElement("a");
//   newButton3.setAttribute("type", "button");
//   newButton3.setAttribute("class", "btn btn-outline-success");
//   newButton3.textContent = "Bookmark";
//   newDivSecond.appendChild(newButton3);

//   elList.appendChild(newLi);
//   let category = item.Categories.split("|");

//   for (const oneCategory of category) {
//     if (!allCategory.includes(oneCategory)) {
//       allCategory.push(oneCategory);
//     }
//   }
//   // console.log(allCategory);
//   let rating = item.imdb_rating;
//   rating = Math.round(rating);
//   rates.push(rating);
//   for (const oneRate of rates) {
//     if (!ratesTwo.includes(oneRate)) {
//       ratesTwo.push(oneRate);
//     }
//   }
// }

// let elForm = document.querySelector(".form");
// let elSelectByDrama = document.querySelector(".sortingDrama");
// let elRating = document.querySelector(".sortingRate");

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   console.log(elSelectByDrama.value);
//   console.log(elRating.value);
  
// });

// function renderRate(array, place) {
//   place.innerHTML = null;
//   let optionByRate = document.createElement("option");
//   optionByRate.value = "Ratings";
//   optionByRate.textContent = "Ratings";
//   place.appendChild(optionByRate);
  
//   for (const key of array) {
//     let optionByRate = document.createElement("option");
//     optionByRate.value = key;
//     optionByRate.textContent = key;
//     place.appendChild(optionByRate);
//   }
// }

// renderRate(ratesTwo.sort(), elRating);

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
//     // console.log(movies.item.Categories);
//     if (movies.item == place[i]) {
//     }
    
//   }
// }

// renderOptions(allCategory, elSelectByDrama);
// let result = 

// elMoviNum.textContent = movies.length;



