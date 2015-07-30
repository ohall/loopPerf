var _ = require('lodash');

var NUM_ELEMENTS = 1000000;


function makeArray(){
  var i=0, testArray = [];
  while( i < NUM_ELEMENTS){
    testArray.push(1);
    i++;
  }
  return testArray;
}


function nativeEach(arr){
  console.time( 'Native forEach' );
  arr.forEach(function (val, index) {
    if(index === arr.length-1){
      console.timeEnd( 'Native forEach' );
    }
  });
}

function nativeMap(arr){
  console.time( 'Native map' );
  arr.forEach(function (val, index) {
    if(index === arr.length-1){
      console.timeEnd( 'Native map' );
    }
  });
}

function loEach(arr){
  console.time( 'lodash each' );
  _.each(arr, function (val, index) {
    if(index === arr.length-1){
      console.timeEnd( 'lodash each' );
    }
  });
}

function loMap(arr){
  console.time( 'lodash map' );
  _.map(arr, function (val, index) {
    if(index === arr.length-1){
      console.timeEnd( 'lodash map' );
    }
  });
}

var example = makeArray();

console.log( 'Times for ' + example.length + ' iterations.' );
nativeEach(example);
nativeMap(example);
loEach(example);
loMap(example);