let fs = require("fs");
let calories = fs.readFileSync('input.txt', 'utf8').split('\n');
calories = calories.map((element) => element.trim());


let resultPart1 = [];
let temp = 0;

calories.forEach(el => {
    if (!el) {
        resultPart1.push(temp);
        temp = 0;
    } else {
        temp += parseInt(el);
    }
});

resultPart1.push(temp);       
console.log("Max calories: ", Math.max(...resultPart1));
        

resultPart2 = resultPart1.sort((a,b)=>b-a);
console.log("Total Calories: ", resultPart2[0] + resultPart2[1] + resultPart2[2]);