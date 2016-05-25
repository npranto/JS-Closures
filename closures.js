var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};


//////////////////PROBLEM 1////////////////////

// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.

// Code Here
  var inner = outer();


//Once you do that, invoke inner.

  //Code Here
  inner();



//////////////////PROBLEM 2////////////////////


var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};


// Above you're given a callFriend function that returns another function.
// Create a makeCall function that when invoked logs  'Calling Jake at 435-215-9248' in your console.

  //Code Here
  var makeCall = callFriend();
  var logger = makeCall("435-215-9248");
  console.log(logger);


//////////////////PROBLEM 3////////////////////



/*
  Write a function called makeCounter that makes the following code work properly.
*/

//Code Here
var makeCounter = function(){
  var count = 0;
  var funcToReturn = function(){
    return count += 1;
  }
  return funcToReturn;
}


//Uncomment this once you make your function
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4

  // console.log(count());
  // console.log(count());
  // console.log(count());
  // console.log(count());




//////////////////PROBLEM 4////////////////////


// Inside the motivation function create another function called message that will return 'You're doing awesome, keep it up firstname lastname.'

  function motivation(firstname, lastname){

    var welcomeText = 'You\'re doing awesome, keep it up ';

    // code message function here.
    var message = function(){
      return welcomeText + firstname + " " + lastname + "."; 
    }

    //Uncommment this to return the value of your invoked message function

    return message()
  }

  motivation('Billy', 'Bob'); // 'Your doing awesome keep it up Billy Bob


//////////////////PROBLEM 5////////////////////
// Here we have a for loop that will iterate as long as i is less than or equal to 5. What we need to do is console.log(i)
// So that it logs ( 0 then 1 then 2 then 3, etc). Run this code in your console to see what the output is.


function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
      setTimeout(newScope(i), i * 1000);
  }

  function newScope(i) {
    return function(){
      console.log(i);
    }
  }
}
timeOutCounter();
  // To make this code work you will need to create a new scope for every iteration.





//////////////////PROBLEM 6////////////////////

var funcArray = [];


  // Make the following code work

  var work = function(num){
    return (function (){
      return num;
    });
  }

  for (var i = 0; i <= 5; i++) {
      funcArray.push(work(i));
  }

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  // console.log(funcArray[0]());
  // console.log(funcArray[1]());
  // console.log(funcArray[2]());
  // console.log(funcArray[3]());
  // console.log(funcArray[4]());
  // console.log(funcArray[5]());

  // *Hint: Don't let this fool you. Break down what's really happening here.














