// 1. Basic DOM Manipulation: How do you select an element with the ID main-title and change its text content to "Welcome to the DOM World"?
let mainTitle = document.getElementById('main-title');
mainTitle.textContent = 'Welcome to the DOM World';


// 2. Event Handling: Write the JavaScript code to listen for a click event on a button with the ID submit-btn and alert "Button Clicked!".

let submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', () => {
    alert('Button Clicked!');
});


// 3. Dynamic Styling: How can you change the background color of a <div> with the class highlight to yellow when a user hovers over it using JavaScript?

let highlightDiv = document.querySelector('.highlight');
highlightDiv.addEventListener('mouseover', () => {
    highlightDiv.style.backgroundColor = 'yellow';
});


// 4. Element Creation and Insertion: Describe how to create a new <li> element, set its text content to "New Item", and append it to an existing <ul> with the ID list-container.

let newItem = document.createElement('li');
newItem.textContent = 'New Item';
let listContainer = document.getElementById('list-container');
listContainer.appendChild(newItem);


// 5. Form Handling: Write a script to prevent the default submission of a form with the ID form-example and instead console log the value of a text input field within the form when the submit button is clicked.

let formExample = document.getElementById('form-example');
formExample.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputField = document.getElementById('input-field');
    console.log(inputField.value);
});



// 6. Understanding Event Bubbling: Provide an example of stopping event bubbling when clicking on a <button> contained within a <div> that both have click event listeners attached.

let button = document.getElementById('button');
let div = document.getElementById('div');

button.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Button clicked');
});

div.addEventListener('click', () => {
    console.log('Div clicked');
});



// 7. Dynamic Page Styling: How can you toggle a class active on an element when it is clicked, ensuring that if the class is present it gets removed, and if it's not, it gets added?

let element = document.getElementById('element');
element.addEventListener('click', () => {
    element.classList.toggle('active');
});



// 8. Advanced Event Handling: Write JavaScript code to change the text content of a paragraph element to display the current time when a button is clicked.

let timeButton = document.getElementById('time-button');
let timeDisplay = document.getElementById('time-display');

timeButton.addEventListener('click', () => {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
});


// 9. Event Listener Removal: How do you remove an event listener from an element, and why might you need to do this?

document.getElementById('element').removeEventListener('click', eventHandler);

// Event listeners should be removed when they are no longer needed to prevent memory leaks and avoid unintended side effects from the event handler function being called multiple times.


// 10. Manipulating Attributes and Properties: Write JavaScript code to change the src attribute of an <img> element and explain the difference between attributes and properties in the context of DOM elements.

document.querySelector('img').setAttribute('src', 'new-image.jpg');

// Attributes are defined in HTML and represent the initial state of an element, while properties are the current state of an element as manipulated by JavaScript.



// 11. Utilizing Dataset Attributes: Explain how to use data-* attributes within an HTML element to store extra information and how to access this information using JavaScript.

// HTML: <div id="user" data-id="123" data-name="Alice"></div>

let user = document.getElementById('user');
let userId = user.dataset.id;
let userName = user.dataset.name;

console.log(userId, userName);


