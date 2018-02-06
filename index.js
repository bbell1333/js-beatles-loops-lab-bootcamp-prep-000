function theBeatlesPlay(musician, instrument){
  var beatles = [];
  for (var i = 0; i<4;i++){
    beatles.push(`${musician[i]} plays ${instrument[i]}`);
    }
  return beatles;
}

function johnLennonFacts(array){
  var i = 0;
  while(i<array.length){
    array[i]=array[i]+"!!!";
    i++
  }
  return array;
}

function iLoveTheBeatles(n){
  do{
    console.log("I love the Beatles!");
  } hile(n<15);
}