console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var me = {
  firstName: "Orayb", 
  lastName: "Alsmadi", 
  age:28, 
  dob:"17 Dec 1991", 
  favoriteFood: ["msa5n", "ma5shi", "mansaf"],
  favoriteMovie: ["The equalizer", "john Wick", "me before you", "alaaddin", " pirates of the caribbean"],
}





var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
function firstName(x)
{
var name =[];

for (var i =0; i< x.length; i++){
name.push(x[i].name["first"])
}
return name;

}

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2

*/
function averageAge(x)
{
var age =0;

for (var i =0; i< x.length; i++){
age= age + x[i].age;
}
return age/(x.length);
}

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(x)
{
var index =0;
minAge= x[0].age;


for (var i =1; i< x.length; i++){

if (x[i].age > minAge)
{index =i;
minAge= x[i].age;}

  var name = x[index].name["first"]+" "+ x[index].name["last"];
}
return name;
}




/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(x)
{
  var name = x[0].name["first"]+" "+ x[0].name["last"];
  var l =name.length;
  maxName= name;


  for (var i = 1; i < x.length; i++) {


    // if ((x[i].name["first"] + " " + x[i].name["last"]).length > l) {
    //   l = (x[i].name["first"] + " " + x[i].name["last"]).length;
    //   maxName = x[i].name["first"] + " " + x[i].name["last"];
    // }

    name = x[i].name["first"] + " " + x[i].name["last"];
    
    if (name.length > l) {
      l = name.length;
      maxName = name;
    }


  }
return maxName;
}

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord (x)
{ 
  // debugger
var str = x.toLowerCase();
str = str.split(' ');
var output = {};
var l = str.length;

for (var i=0; i<l; i++)
{
var c = 0

for (var j=0; j<l; j++)
{
if (str[i] === str[j])
{c++;}
}
 
output[str[i]] = c;

}

return output;
}




/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar (x)
{ 
  // debugger
var str = x.toLowerCase();
str = str.split('');
var output = {};
var l = str.length;

for (var i=0; i<l; i++)
{
var c = 0

for (var j=0; j<l; j++)
{
if (str[i] === str[j])
{c++;}
}
 
output[str[i]] = c;

}

return output;
}


/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: /
=>  {a: 1, cat: 3}
*/

function  selectFromObject (obj, arr)
{ 
  var output = {};
  var l= arr.length;

for (var i=0; i<l; i++)
{  
  for (var key in obj)
  {
  if (key === arr[i])
  output[arr[i]] = obj[arr[i]]
  }
}

  return output 
}

function  selectFromObject2 (obj, arr)
{ 
  var output = {};
  var l= arr.length;

for (var i=0; i<l; i++)
{
  if (obj.hasOwnProperty(arr[i]))
 output[arr[i]] = obj[arr[i]]

}

  return output 
}



/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/

function  objectToArray (x)
{
  var output=[];
  for (var key in x) {

    output.push(key);
    output.push(x[key]);

  }
return output;
}

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/

function  arrayToObject (x)
{
  var output={};
  for (var i=0; i<x.length; i=i+2) {
     output[x[i]] = x[i+1];
     }
return output;
}

/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber (obj)
{
  var output= {};

for (var key in obj)
{
if (typeof obj[key] === "number")
output[key] = obj[key];
}

return output;
}

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function  onlyString (obj)
{
  var output= {};

for (var key in obj)
{
if (typeof obj[key] === "string")
output[key] = obj[key];
}

return output;
}


/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function  onlyArray (obj)
{
  var output= {};

for (var key in obj)
{
if (typeof obj[key] === "object")
output[key] = obj[key];
}

return output;
}

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
function  keysArray (x)
{
  var output=[];
  for (var key in x) {

    output.push(key);
    

  }
return output;
}

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/
function  valuesArray (x)
{
  var output=[];
  for (var key in x) {

    output.push(x[key]);
    

  }
return output;
}

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
var obj = {a:1,b:3,c:4};
delete obj.b;

/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: objectLength({a:1,b:2,c:3,d:4})
=> 4
*/
function   objectLength (x)
{
  var c=0;
  for (var key in x) {

    c++;
    

  }
return c;
}

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/

function  evenValue (x)
{
  var output={};

  for (var key in x) {

    if (x[key]%2===0)
    output[key]=x[key];

  }
return output;
}

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: longestKey({car:1, school:2, monster:3, alexMercer:4})=> 4
*/


function longestKey (x) 
{ 
  // debugger
  var long = "";

  for (var key in x) {
   
    if (key.length>long.length)
    long = key;

  }

  return x[long]
}