// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (arr) => {
    let result = []
    arr.map(elem => result.push(elem.director))
    return [...new Set(result)]
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
    return arr.filter(elem => elem.director == 'Steven Spielberg' && elem.genre.includes('Drama')).length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    //console.log(arr)
    let total = 0
    arr.map(elem => {if(elem && elem.rate){total += elem.rate}})
    if (total == 0) return 0
    let result = Number((total/arr.length).toFixed(2))
    console.log(result)
    return result
}
// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
