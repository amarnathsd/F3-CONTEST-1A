function searchMovies() {
  const apiKey = document.getElementById("Apikey").value;
  const movieTitle = document.getElementById("Movietitle").value;
  console.log(apiKey, movieTitle);

  if (!apiKey || !movieTitle) {
    showError("Both fields are required");
    return;
  }
  const url = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`;
  document.getElementById("Loader").style.display = "block";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //I will show the loader
      //i will handel the error
      document.getElementById("Loader").style.display = "none";
        if(data.error){
            showError(data.error);
        }else{
            displayResults(data.Search);
        }
    });
}

function showError(message) {
  document.getElementById("Error-msg").innerText = message;
}
const btn = document.getElementById("search-btn");

btn.addEventListener("click", searchMovies);


function displayResults(movies){
    const resultsDiv=document.getElementById('Results')
    resultsDiv.innerHTML="";
    movies.forEach((movie,index) =>{
       const card = document.createElement("div");
       card.classList="card";
       card.innerHTML=`
        <img id="cardimg"src="${movie.Poster}" alt="${movie.Title}">
        <div class="row-1">
        <h1>${index+1}</h1>
        <h2>${movie.Title}</h2>
        </div>
        <div class="row-2">
        <p>${movie.Year}</p><br>
        <p>${movie.imdbID}</p>
        </div>
        `;
        resultsDiv.appendChild(card);
    }) 
}