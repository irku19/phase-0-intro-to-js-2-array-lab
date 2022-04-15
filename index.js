// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat(Name) {
  cats.push(Name);
};
destructivelyAppendCat('Ralph');
console.log(cats);

function destructivelyPrependCat(Name) {
  cats.unshift(Name);
};
destructivelyPrependCat('Bob');
console.log(cats);

function destructivelyRemoveLastCat(){
    cats.pop()
};
destructivelyRemoveLastCat();
console.log(cats); 

  function destructivelyRemoveFirstCat(){
    cats.shift()
};
destructivelyRemoveFirstCat();
console.log(cats);

function appendCat (Name) {
  return [...cats, Name];
}
appendCat ('Broom');
console.log(appendCat('Broom'));

function prependCat (Name) {
  return [Name, ...cats];
}
prependCat ('Arnold');
console.log(prependCat('Arnold'));

function removeLastCat(){
  return cats.slice(0,2);
}
console.log(removeLastCat());

function removeFirstCat(){
  return cats.slice(1);
}
console.log(removeFirstCat());


// google how to copy an array
// do changes to the copied version of the array
// return the copied array