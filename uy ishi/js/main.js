let slicedMovies = movies.slice(0, 100);
let elMovieCounter = document.querySelector(".moviNum");
elMovieCounter.textContent = slicedMovies.length;
let elList = document.querySelector(".movieLists");

let newMoviesArray = slicedMovies.map(function (item) {
  return {
    title: item.Title.toString(),
    movieYear: item.movie_year,
    categories: item.Categories.split("|"),
    summary: item.summary,
    imgUrl: `https://i3.ytimg.com/vi/${item.ytid}/sddefault.jpg`,
    videoUrl: `https://www.youtube.com/watch?v=${item.ytid}`,
    rating: item.imdb_rating,
  };
});

let allCategories = [];
for (const item of newMoviesArray) {
  let categoryArray = item.categories;
  for (const oneCategory of categoryArray) {
    if (!allCategories.includes(oneCategory)) {
      allCategories.push(oneCategory);
    }
  }
}
let elForm = document.querySelector(".form");
let elSelect = document.querySelector(".sortingDrama");
let elInput = document.querySelector(".inputRating");

function renderedMovies(array) {
  elList.innerHTML = null
  for (const item of array) {
    var newLi = document.createElement("li");
    newLi.setAttribute(
      "class",
      "col-12 col-sm-5 border border-secondary rounded cards my-5"
    );
  
    var newImg = document.createElement("img");
    newImg.setAttribute("class", "pictures1");
    newImg.src = item.imgUrl
    newImg.width = "200";
    newLi.appendChild(newImg);
  
    var newH4 = document.createElement("h4");
    newH4.setAttribute("class", "ps-3 pt-4");
    newH4.textContent = item.title;
    newLi.appendChild(newH4);
  
    var newDiv1 = document.createElement("div");
    newDiv1.setAttribute("class", "d-flex flex-column");
    newLi.appendChild(newDiv1);
  
    var newDiv1In = document.createElement("div");
    newDiv1In.setAttribute("class", "mt-4 ps-3 d-flex gap-2 align-middle");
    newDiv1.appendChild(newDiv1In);
  
    var calendarImg = document.createElement("img");
    calendarImg.setAttribute("class", "icons");
    calendarImg.src =
      "https://img.freepik.com/free-icon/calendar-icon-black_318-9776.jpg?w=360";
    newDiv1In.appendChild(calendarImg);
  
    var newYear = document.createElement("span");
    newYear.textContent = item.movieYear;
    newDiv1In.appendChild(newYear);
  
    var newDiv2In = document.createElement("div");
    newDiv2In.setAttribute("class", "mt-4 ps-3 d-flex gap-2 align-middle");
    newDiv1.appendChild(newDiv2In);
  
    var starImg = document.createElement("img");
    starImg.setAttribute("class", "icons");
    starImg.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6lnz9at-XRVr0UNWYe9_TfBz_NuqHs5lrclOIi8&s";
    newDiv2In.appendChild(starImg);
  
    var newYear = document.createElement("span");
    newYear.textContent = item.rating;
    newDiv2In.appendChild(newYear);
  
    var newDivSecond = document.createElement("div");
    newDivSecond.setAttribute(
      "class",
      "d-flex px-3 py-4 justify-content-between"
    );
    newLi.appendChild(newDivSecond);
  
    var newButton1 = document.createElement("a");
    newButton1.href = item.videoUrl;
    newButton1.setAttribute("target", "_blank");
    newButton1.setAttribute("class", "btn btn-outline-primary");
    newButton1.textContent = "Watch trailer";
    newDivSecond.appendChild(newButton1);
  
    var newButton2 = document.createElement("a");
    newButton2.setAttribute("type", "button");
    newButton2.setAttribute("class", "btn btn-outline-secondary");
    newButton2.textContent = "More info";
    newDivSecond.appendChild(newButton2);
  
    var newButton3 = document.createElement("a");
    newButton3.setAttribute("type", "button");
    newButton3.setAttribute("class", "btn btn-outline-success");
    newButton3.textContent = "Bookmark";
    newDivSecond.appendChild(newButton3);
  
    elList.appendChild(newLi);
    // console.log(elList);
  }
}
renderedMovies(newMoviesArray)

function renderOptions(array, place) {
  let optionByDrama = document.createElement("option");
  optionByDrama.value = "All";
  optionByDrama.textContent = "All";
  place.appendChild(optionByDrama);
  
  for (const item of array) {
    let optionByDrama = document.createElement("option");
    optionByDrama.value = item;
    optionByDrama.textContent = item;
    place.appendChild(optionByDrama);
  }
  
}
renderOptions(allCategories, elSelect);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
 });
 elForm.addEventListener("change", function (evt) {
  evt.preventDefault();
  filteredCatecory = newMoviesArray.filter(function(item) {
    return item.categories.includes(elSelect.value)
  })
  renderedMovies(filteredCatecory)
 });
 elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  filteredMovies = newMoviesArray.filter(function(item) {
    return elInput.value <= item.rating
  })
  renderedMovies(filteredMovies)
 });


  
  
