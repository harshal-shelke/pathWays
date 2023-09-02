const afilterInput = document.getElementById('appfilterInput');
const aitemList = Array.from(document.getElementById('appitemList').getElementsByTagName('li'));
const aitemListContainer = document.getElementById('appitemList');

afilterInput.addEventListener('input', function() {
    filterItems(afilterInput, aitemList, aitemListContainer)
});


function filterItems(input, list, container) {
    const filterValue = input.value.toLowerCase();
    let matchingItemCount = 0; // Keep track of matching items
  
    list.forEach(item => {
      const itemText = item.textContent.toLowerCase();
      
      if (itemText.includes(filterValue)) {
        item.style.display = 'list-item'; // Show matching items
        matchingItemCount++;
      } else {
        item.style.display = 'none'; // Hide non-matching items
      }
    });
  
    // Show or hide the item list container based on matching items
    if (filterValue === '') {
      container.style.display = 'none'; // Hide the item list container if filter is empty
    } else if (matchingItemCount > 0) {
      container.style.display = 'block'; // Show the item list container
    } else {
      container.style.display = 'none'; // Hide the item list container if no matches
    }
  }

  
