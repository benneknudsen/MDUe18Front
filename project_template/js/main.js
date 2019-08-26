"use strict";

fetch('json/persons.json')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json);
  appendPersons(json);
});


function appendPersons(persons) {
  let htmlTemplate = "";
  for (let person of persons) {
    htmlTemplate += '<article><h4>' + person.name + '</h4><p>' + person.age +
    ' years old</p><p>' +'Hair color: ' + person.haircolor + '</p><p>' + 'Relation: ' + person.relation + '</p></article>';
    }
    document.querySelector("#content").innerHTML = htmlTemplate;
}
