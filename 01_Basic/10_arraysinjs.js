const marvel_heroes = ["thor", "Ironman","spiderman"]
const dc_heroes = ["superman", "flash", "bartman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// it is a spred oerator 
const all_new_heroes = [...marvel_heroes, ...dc_heroes]  
// console.log(all_new_heroes);

const another_aaray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_aaray.flat(2)
console.log(real_another_array);

