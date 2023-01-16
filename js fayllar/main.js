var elMoviNum = document.querySelector(".moviNum");

movies = movies.slice(0, 70);

var elList = document.querySelector(".cat")

for (const item of movies) {
  var newLi = document.createElement("li");
  newLi.setAttribute(
    "class",
    "col-12 col-sm-5 border border-secondary rounded cards my-5"
  );

  var newImg = document.createElement("img");
  newImg.setAttribute("class", "pictures1");
  newImg.setAttribute("src", `https://i3.ytimg.com/vi/${item.ytid}/hqdefault.jpg`)
  newImg.width = "200";
  newLi.appendChild(newImg);

  var newH4 = document.createElement("h4");
  newH4.setAttribute("class", "ps-3 pt-4");
  newH4.textContent = item.Title;
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
  newYear.textContent = item.movie_year;
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
  newYear.textContent = item.imdb_rating;
  newDiv2In.appendChild(newYear);

  var newDivSecond = document.createElement("div");
  newDivSecond.setAttribute(
    "class",
    "d-flex px-3 py-4 justify-content-between"
  );
  newLi.appendChild(newDivSecond);

  var newButton1 = document.createElement("a");
  newButton1.setAttribute("href", `https://www.youtube.com/watch?v=${item.ytid}`)
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
  
  elList.appendChild(newLi)
  console.log(elList);
}

elMoviNum.textContent = movies.length;
