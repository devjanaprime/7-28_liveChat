console.log( 'HEEEEEEEYYYY!!!!' );

var thisIsAFunction = function(){
  alert( "Nate knows what to do");
};

function thisIsAnotherFunction(greeting){
  console.log( 'from thisIsAnotherFunction that Ben Mahowald thinks is "much better"!');

  var theCoolFolks = [ 'Ben J', 'Ben M', 'John', 'Justin', 'Kevin', 'Matt', 'Nate', 'Millie', 'Dev' ];

  console.log( "these are the cool folks:", theCoolFolks );
  console.log( "How many cool folks are there?", theCoolFolks.length );

  for (var i = 0; i < theCoolFolks.length; i++) {
    console.log(greeting + ", " + theCoolFolks[i] );
  }

}

// copied from Nate
thisIsAFunction();
thisIsAnotherFunction("hello");
