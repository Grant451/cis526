/** site.js 
 * You should add your JavaScript code to this file.  
 * See the assignment description in Guide for what
 * your code needs to accomplish.
 */


/*I should have used a table hindsight 20/20 */

//the url:
var stand = "https://velvet-taboo-3000.codio.io/standards.json";

//waits until the form is loaded to run the js: 
window.addEventListener('load', (event) => {
  //The following three methodes are hevily taken from this video that explains the basics of fetch:
  //https://www.youtube.com/watch?v=g6-ZwZmRncs&feature=emb_title
  fetch(stand)
    .then(checkStatus)
    .then(getJSON)
    .then(function(data){
          data.forEach(disp);
          })
    .catch(function(err){
           });
});



function checkStatus(response){
  if (response.status === 200){
    return Promise.resolve(response);
  } else{
      return Promise.reject(
      new Error (response.statusText));
  }
}

function getJSON(response) {
  return response.json();
}

function disp(item, count)
{
  var x = document.getElementById('box');//document.createElement("div");
  var pigeon = document.createElement("div"); 
  var starting_break = document.createElement("br");
  var h2_identifier = document.createElement("h2");
  var identifier = document.createTextNode("Identifier: "+item.identifier);
  
  var p = document.createElement("p");
  var statement = document.createTextNode("Statement: "+item.statement);
  
  var p_description = document.createElement("p");
  var descrioption = document.createTextNode("Description: "+item.description);
  
  var div = document.createElement("div");
  var b = document.createElement("br");
  var subconcept = document.createTextNode("Subconcept: "+item.subconcept);
  
  var b_before = document.createElement("br");
  var div_practices = document.createElement("div");
  var b_practices = document.createElement("br");
  var practices = document.createTextNode("Practices: "+item.practices);
  
  pigeon.appendChild(starting_break);//start with a space. 
  
  
  var open_button = document.createElement("button");
  open_button.className += "open-button"; 
  open_button.appendChild(document.createTextNode('More'));//set the count to the buttons class name.
  open_button.id= count;//set the id of the button
  
  open_button.addEventListener('click', function(event) {
    var lowercontents = document.getElementsByClassName("a");
    var lowercontents_sorted = lowercontents[count];
    lowercontents_sorted.classList.toggle('active');
    var morebutton = document.getElementsByClassName("open-button");
    var morebutton_sorted = morebutton[count];
    if(morebutton_sorted.innerHTML =="More")
      {
        morebutton_sorted.innerHTML = "Less";
      }
      else
        {
          morebutton_sorted.innerHTML = "More";
        }
  });
  
  
  h2_identifier.appendChild(identifier);//put the identifier on then the button
  h2_identifier.appendChild(open_button);
  var dialog = document.createElement("div");//make another div and pigeon -> new div
  dialog.className += "a";//give the div a unique class name. 
  dialog.id = count;//set the dialog div to match the button id. 
  
  
  pigeon.appendChild(h2_identifier);
  p.appendChild(statement);//append the statement in a p tag. 
  pigeon.appendChild(p)//put the p into the div. 
  p_description.appendChild(descrioption);
  dialog.appendChild(p_description);//put the description into the div
  div.appendChild(subconcept);
  div.appendChild(b);
  dialog.appendChild(div);//put the subconcept into the div
  div_practices.appendChild(b_before);
  div_practices.appendChild(practices);
  div_practices.appendChild(b_practices);
  dialog.appendChild(div_practices);//put the practices into the div
  
  
  pigeon.appendChild(dialog);
  x.appendChild(pigeon);
  document.body.appendChild(x);//append the div
}





