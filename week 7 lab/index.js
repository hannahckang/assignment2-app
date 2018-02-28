
function Puppy(name, age) {
  this.name = name;
  this.age = age;
  this.type = "dog";
  this.image = "images/puppy.jpg";
}

function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.type = "panda";
  this.image = "images/rpanda.jpg";
}
function Elephant(name, age) {
  this.name = name;
  this.age = age;
  this.type = "ele";
  this.image = "images/ele.jpg";
}


var animals = [new Puppy(), new Panda(), new Elephant()];
var names = ["Red", "Willy", "Justin", "Jessica"];


function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}


// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Puppy) 
  {
    return new Puppy(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Panda) 
  {
    return new Panda(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Elephant) 
  {
    return new Elephant(generateRandomName(), generateRandomAge());
  }
}

function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}


function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}


$(document).ready(function() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});

