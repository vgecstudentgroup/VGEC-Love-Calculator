const form = document.getElementById('love-form');
const resultDiv = document.getElementById('result');
let visitorCount = 0; // Initialize a variable to store visitor count

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Increase visitor count before displaying result
  visitorCount++;

  // Get form values
  const name1 = document.getElementById('name1').value;
  const dob1 = document.getElementById('dob1').value;
  const name2 = document.getElementById('name2').value;
  const dob2 = document.getElementById('dob2').value;

  // Calculate love percentage (using Math.random())
  const lovePercentage = Math.floor(Math.random() * 101); // Get random number between 0 and 100

  // Display result
  resultDiv.innerHTML = `<h3>${name1} & ${name2}</h3><p>💘 Your love compatibility is... ${lovePercentage}%! 💘 </p><p>You are visitor number ${visitorCount}.</p>`;
});