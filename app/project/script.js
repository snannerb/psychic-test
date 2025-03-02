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