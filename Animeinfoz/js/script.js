// Get the search input and all the anime cards
const searchInput = document.getElementById('searchInput');
const animeCards = document.querySelectorAll('.anime-card');

// 'input' is better than 'keyup' because it triggers instantly 
// on every change (typing, deleting, or pasting)
searchInput.addEventListener('input', function() {
  // Get the search term, make it lowercase, and remove extra spaces
  const filter = searchInput.value.toLowerCase().trim();

  animeCards.forEach(card => {
    // Get the title text from the <h3> inside this specific card
    const title = card.querySelector('h3').textContent.toLowerCase();

    // If the title contains the search term, show it; otherwise, hide it
    if (title.includes(filter)) {
      // Setting to an empty string lets it go back to your CSS default (flex/grid/block)
      card.style.display = ""; 
    } else {
      card.style.display = "none";
    }
  });
});