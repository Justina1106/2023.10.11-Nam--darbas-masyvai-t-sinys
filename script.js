const array = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:

// 3.1. Gauti tik teigiamus skaičius.
let positiveNumbers = array.filter(function(number) {
    return number >= 0;
});

console.log("Positive Numbers:", positiveNumbers);
// 3.2. Gauti tik neigiamus skaičius.
let negativeNumbers = array.filter(function(number) {
    return number < 0;
});

console.log("Negative Numbers:", negativeNumbers);
// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let numbersDivisibleByTwo = array.filter(function(number) {
    return number % 2 === 0;
});

console.log("Numbers Divisible by 2:", numbersDivisibleByTwo);
// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let numbersDivisibleByThree = array.filter(function(number) {
    return number % 3 === 0;
});

console.log("Numbers Divisible by 3:", numbersDivisibleByThree);
// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let numbersDivisibleByFive = array.filter(function(number) {
    return number % 5 === 0;
});

console.log("Numbers Divisible by 5:", numbersDivisibleByFive);
// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let numbersDivisibleByEleven = array.filter(function(number) {
    return number % 11 === 0;
});

console.log("Numbers Divisible by 11:", numbersDivisibleByEleven);
// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let numbersDivisibleByThirtyOne = array.filter(function(number) {
    return number % 31 === 0;
});

console.log("Numbers Divisible by 31:", numbersDivisibleByThirtyOne);
// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let numbersDivisibleByTwoAndThree = array.filter(function(number) {
    return number % 2 === 0 && number % 3 === 0;
});

console.log("Numbers Divisible by 2 and 3:", numbersDivisibleByTwoAndThree);
// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let numbersDivisibleByThreeAndSeven = array.filter(function(number) {
    return number % 3 === 0 && number % 7 === 0;
});

console.log("Numbers Divisible by 3 and 7:", numbersDivisibleByThreeAndSeven);
// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let numbersDivisibleByFiveAndNine = array.filter(function(number) {
    return number % 5 === 0 && number % 9 === 0;
});

console.log("Numbers Divisible by 5 and 9:", numbersDivisibleByFiveAndNine);
// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let numbersDivisibleByFiveAndEleven = array.filter(function(number) {
    return number % 5 === 0 && number % 11 === 0;
});

console.log("Numbers Divisible by 5 and 11:", numbersDivisibleByFiveAndEleven);
// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let numbersDivisibleByTwoEightAndTwelve = array.filter(function(number) {
    return number % 2 === 0 && number % 8 === 0 && number % 12 === 0;
});

console.log("Numbers Divisible by 2 8 and 12:", numbersDivisibleByTwoEightAndTwelve);
// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let numbersDivisibleByTwoOrThree = array.filter(function(number) {
    return number % 2 === 0 || number % 3 === 0;
});

console.log("Numbers Divisible by 2 or 3:", numbersDivisibleByTwoOrThree);
// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let numbersDivisibleByThreeOrFive = array.filter(function(number) {
    return number % 3 === 0 || number % 5 === 0;
});

console.log("Numbers Divisible by 3 or 5:", numbersDivisibleByThreeOrFive);
// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let numbersDivisibleByFiveOrSix = array.filter(function(number) {
    return number % 5 === 0 || number % 6 === 0;
});

console.log("Numbers Divisible by 5 or 6:", numbersDivisibleByFiveOrSix);
// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let numbersDivisibleBySevenOrEight = array.filter(function(number) {
    return number % 7 === 0 || number % 8 === 0;
});

console.log("Numbers Divisible by 7 or 8:", numbersDivisibleBySevenOrEight);
// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let numbersDivisibleByNineOrThirteen = array.filter(function(number) {
    return number % 9 === 0 || number % 13 === 0;
});

console.log("Numbers Divisible by 9 or 13:", numbersDivisibleByNineOrThirteen);
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let numbersDivisibleByTwoOrThreeOrFive = array.filter(function(number) {
    return number % 2 === 0 || number % 3 === 0 || number % 5 === 0;
});

console.log("Numbers Divisible by 2 3 or 5:", numbersDivisibleByTwoOrThreeOrFive);
// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let numbersDivisibleByFiveOrSevenOrNine = array.filter(function(number) {
    return number % 5 === 0 || number % 7 === 0 || number % 9 === 0;
});

console.log("Numbers Divisible by 5 7 or 9:", numbersDivisibleByFiveOrSevenOrNine);
// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let numbersDivisibleBySevenOrEightOrEleven = array.filter(function(number) {
    return number % 7 === 0 || number % 8 === 0 || number % 11 === 0;
});

console.log("Numbers Divisible by 7, 8 or 11:", numbersDivisibleBySevenOrEightOrEleven);
// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let numbersDivisibleByNineOrTwelveOrThirteen = array.filter(function(number) {
    return number % 9 === 0 || number % 12 === 0 || number % 13 === 0;
});

console.log("Numbers Divisible by 9, 12 or 13:", numbersDivisibleByNineOrTwelveOrThirteen);
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let numbersGreaterThan100 = array.filter(function(number) {
    return number > 100;
});

console.log("Numbers Greater than 100:", numbersGreaterThan100);
// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let numbersGreaterThan555 = array.filter(function(number) {
    return number > 555;
});

console.log("Numbers Greater than 555:", numbersGreaterThan555);
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let numbersGreaterOrEqual888 = array.filter(function(number) {
    return number >= 888;
});

console.log("Numbers Greater or equal than 888:", numbersGreaterOrEqual888);
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let numbersGreaterOrEqual6789 = array.filter(function(number) {
    return number >= 6789;
});

console.log("Numbers Greater or equal than 6789:", numbersGreaterOrEqual6789);
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let numbersLessThan50 = array.filter(function(number) {
    return number < 50;
});

console.log("Numbers Less than 50:", numbersLessThan50);
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let numbersLessThan1000 = array.filter(function(number) {
    return number < 1000;
});

console.log("Numbers Less than 1000:", numbersLessThan1000);
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let numbersLessOrEqualMinusOne = array.filter(function(number) {
    return number <= -1;
});

console.log("Numbers Less or equal -1:", numbersLessOrEqualMinusOne);
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let numbersLessOrEqualMinus5564 = array.filter(function(number) {
    return number <= -5564;
});

console.log("Numbers Less or equal -5564:", numbersLessOrEqualMinus5564);
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let filteredNumbers = array.filter(function(number) {
    return number > 500 && number < 1000;
});

console.log("Numbers between 500 and 1000:", filteredNumbers);
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let filteredNumbers2 = array.filter(function(number) {
    return number > 0 && number < 100;
});

console.log("Numbers between 0 and 100:", filteredNumbers2);
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let filteredNumbers3 = array.filter(function(number) {
    return number < 0 && number > -50;
});

console.log("Numbers between -50 and 0:", filteredNumbers3);
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let filteredNumbers4 = array.filter(function(number) {
    return number <= 0 && number > -100;
});

console.log("Numbers between -100 and 0:", filteredNumbers4);
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let filteredNumbers5 = array.filter(function(number) {
    return number >= 0 && number < 55;
});

console.log("Numbers between 0 and 55:", filteredNumbers5);
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let filteredNumbers6 = array.filter(function(number) {
    return number >= 444 && number <= 654;
});

console.log("Numbers between 444 and 654:", filteredNumbers6);
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let positiveNumbersDivisibleByTwo = array.filter(function(number) {
    return number > 0 && number % 2 === 0;
});

console.log("Positive Numbers Divisible by 2:", positiveNumbersDivisibleByTwo);
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let positiveNumbersDivisibleByThree = array.filter(function(number) {
    return number > 0 && number % 3 === 0;
});

console.log("Positive Numbers Divisible by 3:", positiveNumbersDivisibleByThree);
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let negativeNumbersDivisibleByFour = array.filter(function(number) {
    return number < 0 && number % 4 === 0;
});

console.log("Negative Numbers Divisible by 4:", negativeNumbersDivisibleByFour);
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let negativeNumbersDivisibleBy111 = array.filter(function(number) {
    return number < 0 && number % 111 === 0;
});

console.log("Negative Numbers Divisible by 111:", negativeNumbersDivisibleBy111);
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let numbersGreaterThan500AndDivisibleBy2 = array.filter(function(number) {
    return number > 500 && number % 2 === 0;
});

console.log("Numbers Greater Than 500 and Divisible by 2:", numbersGreaterThan500AndDivisibleBy2);
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let numbersGreaterThan1000AndDivisibleBy3 = array.filter(function(number) {
    return number > 1000 && number % 3 === 0;
});

console.log("Numbers Greater Than 1000 and Divisible by 3:", numbersGreaterThan1000AndDivisibleBy3);
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let numbersLessThan1000AndDivisibleBy9 = array.filter(function(number) {
    return number < 1000 && number % 9 === 0;
});

console.log("Numbers Less Than 1000 and Divisible by 9:", numbersLessThan1000AndDivisibleBy9);
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let numbersLessThan500AndDivisibleBy2 = array.filter(function(number) {
    return number < 500 && number % 2 === 0;
});

console.log("Numbers Less Than 500 and Divisible by 2:", numbersLessThan500AndDivisibleBy2);
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let filteredNumbers7 = array.filter(function(number) {
    return number >= 33 && number % 3 === 0;
});

console.log("Numbers Greater or Equal 33 and Divisible by 3:", filteredNumbers7);
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let filteredNumbers8 = array.filter(function(number) {
    return number >= 444 && number % 12 === 0;
});

console.log("Numbers Greater or Equal 444 and Divisible by 12:", filteredNumbers8);
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let filteredNumbers9 = array.filter(function(number) {
    return number <= 155 && number % 5 === 0;
});

console.log("skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5:", filteredNumbers9);
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let filteredNumbers10 = array.filter(function(number) {
    return number <= -333 && number % 9 === 0;
});

console.log("skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9:", filteredNumbers10);
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let filteredNumbers11 = array.filter(function(number) {
    return number > 100 && number < 500 && number % 5 === 0;
});

console.log("skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5:", filteredNumbers11);
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let filteredNumbers12 = array.filter(function(number) {
    return number >= 88 && number < 1000 && number % 2 === 0;
});

console.log("skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2:", filteredNumbers12);
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let filteredNumbers13 = array.filter(function(number) {
    return number <= 888 && number >= 333 && number % 3 === 0 && number !== 0;
});

console.log("skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis:", filteredNumbers13);
// 3.51. Gauti tik skaičius.
let allNumbers = array.filter(function(number) {
    return !isNaN(number) && isFinite(number);
});

console.log("Gauti tik skaičius:", allNumbers);
// 3.52. Gauti tik tekstus (string).
let stringsOnly = array.filter(function(element) {
    return typeof element === 'string';
});

console.log("Gauti tik tekstus (string):", stringsOnly);
// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let longStrings = array.filter(function(element) {
    return typeof element === 'string' && element.length > 5;
});

console.log("tik tekstus (string), kurie turi daugiau nei 5 simbolius:", longStrings);
// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let longStrings2 = array.filter(function(element) {
    return typeof element === 'string' && element.length <= 5;
});

console.log("tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius:", longStrings2);
// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
let longStrings3 = array.filter(function(element) {
    return typeof element === 'string' && element.length < 7;
});

console.log("tekstus (string), kurie turi mažiau nei 7 simbolius:", longStrings3);
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let stringsWithT = array.filter(function(element) {
    return typeof element === 'string' && element.includes('t');
});

console.log("tekstus (string), kurie turi raidę t:", stringsWithT);
// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let stringsWithY = array.filter(function(element) {
    return typeof element === 'string' && element.includes('y');
});

console.log("tekstus (string), kurie turi raidę y:", stringsWithY);
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let stringsWithEorA = array.filter(function(element) {
    return typeof element === 'string' && (element.indexOf('e') !== -1 || element.indexOf('a') !== -1);
});

console.log("tekstus (string), kurie turi raides e arba a:", stringsWithEorA);
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let stringsWithTAndI = array.filter(function(element) {
    return typeof element === 'string' && (element.indexOf('t') !== -1 && element.indexOf('i') !== -1);
});

console.log("tekstus (string), kurie turi raides t ir i:", stringsWithTAndI);
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide d.
// 3.72. Gauti tik tekstus (string), kurie baigiasi raide s.
// 3.73. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.