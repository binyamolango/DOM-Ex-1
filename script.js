// querySelector
const container = document.querySelector("#container");
// createElement
const content = document.createElement("div");
// add class to the created div
content.classList.toggle("content");
// add text to the content
content.textContent = "Hello, this is my content inside my container.";
// append content to container
container.appendChild(content);
// add paragraph element with red text to the container
const redParagraph = document.createElement("p");
redParagraph.setAttribute("id", "redParagraph");
redParagraph.setAttribute("style", "color: red;");
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);
// add h3 element with blue text
const blueHeading = document.createElement("h3");
blueHeading.setAttribute("id", "blueHeading");
blueHeading.setAttribute("style", "color: blue;");
blueHeading.textContent = "I'm a blue h3!";
container.appendChild(blueHeading);
// add a div with a black border and pink background color
const blackBorderPinkBackground = document.createElement("div");
blackBorderPinkBackground.setAttribute("id", "blackBorderPinkBackground");
blackBorderPinkBackground.setAttribute("style", "border: solid 3px black; background-color: pink;");
// add h1 that says "I'm in a div"
// add p that says "ME TOO!"
// append the above h1 and p to blackBorderPinkBackground before adding it to the container
const headingInDiv = document.createElement("h1");
const paragraphInDiv = document.createElement("p");
headingInDiv.textContent = "I'm in a div";
paragraphInDiv.textContent = "ME TOO!";
headingInDiv.setAttribute("id", "headingInDiv");
paragraphInDiv.setAttribute("id", "paragraphInDiv");
blackBorderPinkBackground.appendChild(headingInDiv);
blackBorderPinkBackground.appendChild(paragraphInDiv);

container.appendChild(blackBorderPinkBackground);

// method two of creating events
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World");
// the downside of the above method is that DOM can only have one "onclick" property

// method three of creating events
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("Hello World");
})

// using named function for creating events
function alertFunction() {
    alert("YAY! YOU DID IT!");
}
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", alertFunction);

// add parameter to the function for further accessing the evert information
const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

// attaching listeners to groups of nodes
const buttons = document.querySelectorAll("button");
buttons.forEach(each => {
    each.addEventListener("click", () => {
        alert(each.id);
    })
})