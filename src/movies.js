// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map ((movie) => {
        return movie.director;
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const steven = moviesArray.filter((ssMovies) => {
        return ssMovies.director === "Steven Spielberg" && ssMovies.genre.includes("Drama");
    })
        return steven.length; 
    }



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const scores = moviesArray.reduce ((acum, valor) => {
        if (!valor.score){
            return acum;
        }
        else {
            return acum + valor.score
        }
    }, 0)
   
    
    let sumScoresAvg = (scores/(moviesArray.length));
    let sumScoresAvgRound = Number(sumScoresAvg.toFixed(2));
    return sumScoresAvgRound;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovs = moviesArray.filter((movs) => {
        return movs.genre.includes('Drama')
        })
    if (dramaMovs.length === 0){
        return 0
    }

    return scoresAverage(dramaMovs)

    // let dramaScores = dramaMovs.reduce((acum, sum) => {
    //     return acum + sum.score;

    // },0);
    // let dramaAvg = dramaScores/dramaMovs.length;
    // return Number(dramaAvg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const cloneMovies = moviesArray.slice();
    cloneMovies.sort((s1, s2) => {
        return s1.year - s2.year;
        
    })
    return cloneMovies.sort((a,b) => {
        if (a.year === b.year){
            if(b.title < a.title){
                return 1;
            }
            else {
                return -1;
            }
        };
   
     })
}


   



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titleArray = moviesArray.map((movie)=>{
        return movie.title
    })
    titleArray.sort();
    let top20 = [];
    if (titleArray.length > 20){
        for (let i = 0; i<=19; i++){
            top20.push(titleArray[i]);
        }
        return top20;
    }
    else {
        return titleArray;
    }   
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
