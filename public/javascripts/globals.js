// globals
var total_calorie_count = 1;
var textIndex = 0;

var keyword_dictionary = {
  "Avocado"            : {serving: "grams", calories: 1.7},
  "Al Pastor"          : {serving: "grams", calories: 2.21},
  "Wheat Bread"        : {serving: "slices", calories: 60},
  "Carne Asada"        : {serving: "grams", calories: 2.78},
  "Cheddar Cheese"     : {serving: "grams", calories: 3.22},
  "Chicken Breast"     : {serving: "grams", calories: 1.15},
  "Egg Whites"         : {serving: "cup", calories: 133.34},
  "Greek Yogurt"       : {serving: "grams", calories: 0.84},
  "Hershey's Kiss"     : {serving: "kiss", calories: 21.12},
  "Ketchup"            : {serving: "Tbs", calories: 20},
  "Honey Ham"          : {serving: "grams", calories: 1.23},
  "Mandarins"          : {serving: "mandarin", calories: 40},
  "Mushrooms"          : {serving: "grams", calories: 0.25},
  "Pinto Beans"        : {serving: "grams", calories: 0.64},
  "Pasta"              : {serving: "grams", calories: 1.67},
  "Pasta Sauce"        : {serving: "cups", calories: 100},
  "Protein Shake"      : {serving: "shake", calories: 130},
  "Brown Rice"         : {serving: "grams", calories: 0.92},
  "Shrimp"             : {serving: "grams", calories: 1.06},
  "Sour Cream"         : {serving: "grams", calories: 1.33},
  "Soy Milk"           : {serving: "cups", calories: 100},
  "Tortilla - Flour"   : {serving: "tortilla", calories: 80},
  "Tortilla - Corn"    : {serving: "tortilla", calories: 40},
  "Turkey Bacon"       : {serving: "grams", calories: 30},
  "Turkey Ground Beef" : {serving: "grams", calories: 1.08},
  "Turkey Sausage"     : {serving: "grams", calories: 1.97},
  "Veggie Crackers"    : {serving: "grams", calories: 4.67},
  "M&Ms"               : {serving: "m&m", calories: 4.62},
  "Trident Gum"        : {serving: "piece", calories: 3.5},
  "Rotisserie Chicken" : {serving: "grams", calories: 1.65},
  "Vanilla Wafers"     : {serving: "wafer", calories: 17.5},
  "Pocky Sticks"       : {serving: "stick", calories: 12.5}
};

var calorie_total = 0;

