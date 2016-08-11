console.log( 'HEEEEEEEYYYY!!!!' );

var thisIsAFunction = function(){
  alert( "Nate knows what to do");
};

function thisIsAnotherFunction(greeting){
  console.log( 'from thisIsAnotherFunction that Ben Mahowald thinks is "much better"!');
  // start off with an empty array
  // into which we'll PUSH objects of cool folks
  var theCoolFolks = [];

  var newPerson ={
    'name': 'Millie',
    'homeTown': "Shoreview... suburb of StP"
  };

  console.log( 'newPerson:', newPerson );
  // push Millie into the Cool FOlks
  theCoolFolks.push( newPerson );
  // create dEv
  newPerson ={
    'name': 'dEv',
    'homeTown': "dreary Erie, the mistake on the lake"
  };
  // force the cool kids to invite dEv to the birthday party
  theCoolFolks.push( newPerson );
  console.log( "these are the cool folks:", theCoolFolks );
  console.log( "How many cool folks are there?", theCoolFolks.length );

  for (var i = 0; i < theCoolFolks.length; i++) {
    console.log(greeting + ", " + theCoolFolks[i].name + " who is from " + theCoolFolks[i].homeTown );
  }

}

// copied from Nate
thisIsAFunction();
thisIsAnotherFunction("hello");
