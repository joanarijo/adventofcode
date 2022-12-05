


let fs = require("fs");
let calories = fs.readFileSync('input.txt', 'utf8').split('\n');
calories = calories.map((element) => element.trim());


let result_part1 = [];
let temp = 0;

calories.forEach(el => {
    if (!el) {
        result_part1.push(temp);
        temp = 0;
    } else {
        temp += parseInt(el);
    }
});

result_part1.push(temp);       
console.log("Max calories: ", Math.max(...result_part1));
        

result_part2 = result_part1.sort((a,b)=>b-a);
console.log("Total Calories: ", result_part2[0] + result_part2[1] + result_part2[2]);
