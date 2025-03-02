**Here you can check all the code explanation.**

Let’s break down the code **file by file** and **block by block**, explaining its functionality, importance, caveats, possible improvements, and how to run it.

---

### **File Structure**
```
project/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
│   ├── img5.jpg
│   ├── img6.jpg
│   ├── img7.jpg
│   ├── img8.jpg
│   ├── img9.jpg
│   └── img10.jpg
```

#### **Explanation**
- **`index.html`**: The main HTML file that structures the app.
- **`styles.css`**: Contains the styling for the app.
- **`script.js`**: The JavaScript file that handles the app’s logic.
- **`images/`**: A folder containing the images used in the app. These images are referenced in `script.js`.

---

### **1. HTML (`index.html`)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pixel Oracle</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app">
    <h1>Pixel Oracle</h1>
    <div id="image-container">
      <img id="current-image" src="" alt="Random Image">
      <div id="attributes" class="hidden"></div>
    </div>
    <div id="guess-section">
      <input type="text" id="guess-1" placeholder="Guess Attribute 1">
      <input type="text" id="guess-2" placeholder="Guess Attribute 2">
      <button id="submit-guess">Submit Guess</button>
    </div>
    <button id="next-image" class="hidden">Next Image</button>
    <div id="score-section" class="hidden">
      <h2>Your Psychic Score</h2>
      <p id="score"></p>
      <p>Your accuracy: <span id="accuracy"></span>%</p>
      <p>Scoring Mechanism: Your score is calculated based on the number of correct guesses out of total possible guesses.</p>
    </div>
    <footer>
      <a href="https://pixel-oracle.com/" target="_blank">Visit Pixel Oracle</a>
    </footer>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

#### **Block-by-block Explanation**
1. **`<head>` Section**:
   - **`<meta charset="UTF-8">`**: Ensures proper text encoding.
   - **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Makes the app responsive on mobile devices.
   - **`<title>`**: Sets the title of the webpage.
   - **`<link rel="stylesheet" href="styles.css">`**: Links the CSS file for styling.
   - **`<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">`**: Loads the "Press Start 2P" font from Google Fonts, giving the app a retro pixelated look.

2. **`<body>` Section**:
   - **`<h1>`**: Displays the app’s title, "Pixel Oracle."
   - **`<img>`**: Displays the current image. The `src` is dynamically set by JavaScript.
   - **`<div id="attributes">`**: Displays the actual attributes of the image after the user submits their guess.
   - **`<input>`**: Two text inputs for the user to enter their guesses.
   - **`<button id="submit-guess">`**: Submits the user’s guesses.
   - **`<button id="next-image">`**: Loads the next image.
   - **`<div id="score-section">`**: Displays the user’s score after all images are processed.
   - **`<footer>`**: Includes a link to the Pixel Oracle website.

3. **`<script src="script.js">`**: Links the JavaScript file that powers the app.

---

### **2. CSS (`styles.css`)**
```css
/* Load pixel font */
@font-face {
  font-family: 'Press Start 2P';
  src: url('https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2') format('woff2');
}

/* General styling */
body {
  font-family: 'Press Start 2P', cursive;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
  padding: 20px;
}

#app {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  color: #00ff00;
}

#image-container img {
  max-width: 100%;
  height: auto;
  border: 2px solid #00ff00;
  margin: 20px 0;
}

#guess-section {
  margin: 20px 0;
}

input[type="text"] {
  margin: 5px;
  padding: 10px;
  font-family: 'Press Start 2P', cursive;
  background-color: #333;
  color: #00ff00;
  border: 1px solid #00ff00;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-family: 'Press Start 2P', cursive;
  background-color: #00ff00;
  color: #1e1e1e;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #00cc00;
}

.hidden {
  display: none;
}

footer {
  margin-top: 40px;
  font-size: 0.8em;
}

footer a {
  color: #00ff00;
  text-decoration: none;
}

/* Responsive Design */
@media (max-width: 600px) {
  body {
    padding: 10px;
  }

  h1 {
    font-size: 1.5em;
  }

  input[type="text"] {
    width: 90%;
    margin: 5px auto;
  }

  button {
    width: 90%;
    margin: 10px auto;
  }
}
```

#### **Block-by-block Explanation**
1. **Font Loading**:
   - Uses `@font-face` to load the "Press Start 2P" font.

2. **General Styling**:
   - **`body`**: Sets the background color, font, and text alignment.
   - **`#app`**: Centers the app and limits its maximum width to 600px.
   - **`h1`**: Styles the title with a green color.
   - **`img`**: Styles the image with a green border and ensures it’s responsive.

3. **Input and Button Styling**:
   - **`input[type="text"]`**: Styles the text inputs with a retro look.
   - **`button`**: Styles the buttons with a green background and hover effect.

4. **Hidden Class**:
   - **`.hidden`**: Used to hide elements until they are needed.

5. **Footer**:
   - Styles the footer link with green color.

6. **Responsive Design**:
   - Adjusts the layout for screen widths less than 600px.

---

### **3. JavaScript (`script.js`)**
```javascript
// Image and attribute pool
const images = [
  { url: 'images/img1.jpg', attributes: ['Happy', 'Blue'] },
  { url: 'images/img2.jpg', attributes: ['Angry', 'Red'] },
  { url: 'images/img3.jpg', attributes: ['Sad', 'Green'] },
  { url: 'images/img4.jpg', attributes: ['Calm', 'Yellow'] },
  { url: 'images/img5.jpg', attributes: ['Excited', 'Purple'] },
  { url: 'images/img6.jpg', attributes: ['Scared', 'Orange'] },
  { url: 'images/img7.jpg', attributes: ['Bored', 'Pink'] },
  { url: 'images/img8.jpg', attributes: ['Surprised', 'Black'] },
  { url: 'images/img9.jpg', attributes: ['Confused', 'White'] },
  { url: 'images/img10.jpg', attributes: ['Optimistic', 'Gray'] }
];

// Global variables
let currentIndex = 0;
let userGuesses = [];

// Initialize the app
function init() {
  displayImage();
}

// Display the current image
function displayImage() {
  const imageElement = document.getElementById('current-image');
  imageElement.src = images[currentIndex].url;
}

// Event listeners for user interaction
document.getElementById('submit-guess').addEventListener('click', handleGuess);
document.getElementById('next-image').addEventListener('click', nextImage);

function handleGuess() {
  const guess1 = document.getElementById('guess-1').value.trim().toLowerCase();
  const guess2 = document.getElementById('guess-2').value.trim().toLowerCase();
  const actualAttributes = images[currentIndex].attributes.map(attr => attr.toLowerCase());

  if (!guess1 || !guess2) {
    alert("Please fill in both guesses before submitting.");
    return;
  }

  const isCorrect1 = actualAttributes.includes(guess1);
  const isCorrect2 = actualAttributes.includes(guess2);

  userGuesses.push({ guess1, guess2, isCorrect1, isCorrect2 });

  // Show attributes
  document.getElementById('attributes').textContent = `Actual attributes: ${images[currentIndex].attributes.join(', ')}`;
  document.getElementById('attributes').classList.remove('hidden');

  // Enable next button
  document.getElementById('next-image').classList.remove('hidden');
}

function nextImage() {
  currentIndex++;
  if (currentIndex < images.length) {
    displayImage();
    document.getElementById('attributes').classList.add('hidden');
    document.getElementById('next-image').classList.add('hidden');
    document.getElementById('guess-1').value = '';
    document.getElementById('guess-2').value = '';
  } else {
    calculateScore();
  }
}

function calculateScore() {
  let correctGuesses = 0;
  userGuesses.forEach(guess => {
    if (guess.isCorrect1) correctGuesses++;
    if (guess.isCorrect2) correctGuesses++;
  });

  const totalGuesses = userGuesses.length * 2;
  const accuracy = ((correctGuesses / totalGuesses) * 100).toFixed(2);

  document.getElementById('score').textContent = `${correctGuesses} / ${totalGuesses}`;
  document.getElementById('accuracy').textContent = accuracy;
  document.getElementById('score-section').classList.remove('hidden');
}

init();
```

#### **Block-by-block Explanation**
1. **Data Initialization**:
   - **`images`**: An array of objects, each containing an image URL and its attributes.
   - **`currentIndex`**: Tracks the current image being displayed.
   - **`userGuesses`**: Stores the user’s guesses for scoring.

2. **Initialize the App**:
   - **`init()`**: Calls `displayImage()` to show the first image.

3. **Display Image**:
   - **`displayImage()`**: Sets the `src` of the `<img>` element to the current image’s URL.

4. **Event Listeners**:
   - **`submit-guess`**: Calls `handleGuess()` when the user submits their guesses.
   - **`next-image`**: Calls `nextImage()` to load the next image.

5. **Handle User Guess**:
   - **`handleGuess()`**: 
     - Validates that both guesses are filled.
     - Checks if the guesses match the actual attributes.
     - Updates `userGuesses` with the results.
     - Displays the actual attributes and enables the "Next Image" button.

6. **Next Image**:
   - **`nextImage()`**:
     - Increments `currentIndex`.
     - Displays the next image or calculates the score if all images are processed.

7. **Calculate Score**:
   - **`calculateScore()`**:
     -