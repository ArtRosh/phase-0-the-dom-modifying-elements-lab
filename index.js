// Write your code here!
// Remove the <main> element with id 'main'
const main = document.querySelector('main#main');
if (main) {
    main.remove();
}

// Create a new <h1> element and set its properties
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";

// Append the new header to the DOM (if necessary)
document.body.appendChild(newHeader);