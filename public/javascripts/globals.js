// globals
var total_calorie_count = 1;
var textIndex = 0;

var calorie_dictionary = {
  avocado : 1.7,
  bread : 60,
  cheese : 3.22,
  chicken : 1.15,
  cuties : 40,
  eggWhites : 133.34,
  greekYo : 0.84,
  hKiss : 21.12,
  ketchup : 20,
  lunchMeat : 1.23,
  mushrooms : 0.25,
  pBeans : 0.85,
  pasta : 1.67,
  pastaSauce : 100,
  proteinShake : 130,
  rice : 0.92,
  shrimp : 1.06,
  sourCream : 1.33,
  soyMilk : 100,
  tortillaF : 80,
  tortillaC : 40,
  turkeyB : 30,
  turkeyGB : 1.08,
  turkeyS : 1.97,
  vCrackers : 4.67,
  mms : 4.62,
  gum : 3.5,
  rotisserieChicken : 1.65,
  smiles : 80,
  vanillaWafers : 17.5,
  pockySticks : 12.5
};

var keyword_dictionary = {
  "Avocado" : {serving: "grams", calories: 1.7},
  "Wheat Bread" : {serving: "slices", calories: 60}
};

// var string_keyword_dictionary = {
//   "Avocado" : avocado,
//   "Wheat Bread" : bread,
//   "Cheddar Cheese" : cheese,
//   "Chicken Breast" : chicken,
//   "Cutie Mandarins" : cuties,
//   "Egg Whites" : eggWhites,
//   "Greek Yogurt" : greekYo,
//   "Hershey's Kiss" : hKiss,
//   "Ketchup" : ketchup,
//   "Honey Ham" : lunchMeat,
//   "Mushrooms" : mushrooms,
//   "Pinto Beans" : pBeans,
//   "Pasta" : pasta,
//   "Pasta Sauced" : pastaSauce,
//   "Protein Shake" : proteinShake,
//   "Brown Rice" : rice,
//   "Shrimp" : shrimp,
//   "Sour Cream" : sourCream,
//   "Soy Milk" : soyMilk,
//   "Tortilla - Flour" : tortillaF,
//   "Tortilla - Corn" : tortillaC,
//   "Turkey Bacon" : turkeyB,
//   "Turkey Ground Beef" : turkeyGB,
//   "Turkey Sausage" : turkeyS,
//   "Veggie Crackers" : vCrackers,
//   "M&Ms" : mms,
//   "Trident Gum" : gum,
//   "Rotisserie Chicken" : rotisserieChicken,
//   "Smiles Mandarins" : smiles,
//   "Vanilla Wafers" : vanillaWafers,
//   "Pocky Sticks" : pockySticks
// };

var calorie_total = 0;

