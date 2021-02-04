var objectives = document.getElementById('objectiveList');
console.log('Giving ONE element by id: ', objectives);

var divSkill = document.getElementsByClassName('#skillList');
console.log('Skill Div: ', divSkill);

var listItems = document.getElementsByTagName('li');
console.log('List Items(li): ', listItems);

var idQuery = document.querySelector("#objectiveList");
console.log('id query results: ', idQuery);

var classQuery = document.querySelector(".content");
console.log('class query results: ', classQuery);

var h1Query = document.querySelector("h1");
console.log('h1 query results: ', h1Query);

var classQueryAll = document.querySelectorAll('.content');
console.log('here is everything in the .container div: ', classQueryAll);

var lineItemsQueryAll = document.querySelectorAll('li');
console.log('all the li elements are: ', lineItemsQueryAll);


