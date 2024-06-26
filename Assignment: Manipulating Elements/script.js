/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

function createInputElm(label, type = "text") {
  let labelEle = document.createElement("label");

  labelEle.textContent = label + ":";

  let inputEle = document.createElement("input");

  inputEle.type = type;

  labelEle.append(inputEle);

  return labelEle;
}

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

function createInputStrEle(label, type = "text") {
  return `<label> ${label}: <input type = "${type}"></label>`;
}

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>

function createList(arr) {
  let ul = document.createElement("ul");

  arr.forEach((ele) => {
    let li = document.createElement("li");
    li.innerText = ele;
    ul.append(li);
  });

  return ul;
}

// TEST
createList(["ALABAMA", "ALASKA", "HAWAII", "KENTUCKY"]);
createList(["Afghanistan", "Antarctica", "Congo", "Estonia"]);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
  <ul>
    <li>
      <p>Learn DOM</p>
      <input type="checkbox" checked name="" id="">
      <span>X</span>
    </li>
  </ul>
  */

function createTodoList(arr) {
  let ul = document.createElement("ul");
  arr.forEach((obj) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = obj.name;
    let input = document.createElement("input");
    input.type = "checkbox";
    let span = document.createElement("span");
    if (obj.isDone) {
      span.innerText = "✅";
    } else {
      span.innerText = "❌";
    }
    li.append(p, input, span);

    ul.append(li);
  });
  return ul;
}

// TEST
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn JS", isDone: true },
]);
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn React", isDone: true },
  { name: "Learn JS", isDone: true },
]);
