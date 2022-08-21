// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(arr) {
    const directorsList = arr.map(function (movie){
        return movie.director}
                                          )
      return directorsList
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop
// up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
	const SpielDramaMovies = arr.filter(function (movie){
  if (movie.director === `Steven Spielberg`&& movie.genre.includes(`Drama`)){
    return true
  }
    return false
  })
  return SpielDramaMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){
 if (moviesArray.length === 0){ return 0 } 
 //else if (movies.score.length === 0){continue}
 else{
    const sumOfScore = moviesArray.reduce(function(sum,score){
  // if (!score.score){return score}
      return sum + score.score
    },0
                                      )
    
     return Number((sumOfScore / moviesArray.length).toFixed(2))
}
  }
  
  

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) { 
  let dramaMovies = moviesArray.filter(function (movie){
    return movie.genre.includes("Drama")
  })
  const sumOfScore = dramaMovies.reduce(function(sum,score){
        return sum + score.score},0
                                        )
      
       return Number((sumOfScore / moviesArray.length).toFixed(2))
}

     
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
let sortedMovies = moviesArray.slice();
sortedMovies = sortedMovies.sort(function (a,b) { return a.year - b.year || a.title.localeCompare(b.title) })
  return sortedMovies
  }



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedByTitles = moviesArray.map(function(movie){return movie.title})
  sortedByTitles.sort(function(a, b){ return a.localeCompare(b)})
  return sortedByTitles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
return movies.map(function(movie){
let minutes = 0 
let hours = 0

if (movie.duration.includes("m")) {
  minutes = Number(movie.duration.slice(movie.duration.indexOf(" ") + 1, movie.duration.indexOf("m")));
}
if (movie.duration.includes("h")) {
  hoursInMinutes = Number(movie.duration.slice(0, movie.duration.indexOf("h"))) * 60
}
return  {...movie, duration: minutes + hours}
})
}
// --> schau nohcmla nach was das am ende war lösung von marco

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
