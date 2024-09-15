// Get all the elements we need to interact with
const searchInput = document.querySelector('.search-bar input[type="search"]');
const searchButton = document.querySelector('.search-bar button');
const productList = document.querySelector('.product-listing ul');

// Add event listener to the search button
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    // Make a fake API call to retrieve search results
    fetch(`https://example.com/api/search?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        // Update the product list with the search results
        const productListItems = data.results.map(item => {
          return `
            <li>
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>$${item.price}</p>
            </li>
          `;
        });
        productList.innerHTML = productListItems.join('');
      })
      .catch(error => console.error(error));
  }
});

// Example API data for demonstration purposes
const apiData = {
  results: [
    {
      image: 'https://tse4.mm.bing.net/th?id=OIP.yBkcswIntp3sqAw4MYCjfQHaHU&pid=Api&P=0&h=180',
      name: 'Samsung s10',
      price: 19.99
    },
    {
      image: 'https://tse4.mm.bing.net/th?id=OIP.ahkSHdZgJIovd70k60jdowHaFj&pid=Api&P=0&h=180',
      name: 'Lenova',
      price: 29.99
    },
    {
      image: 'http://purepng.com/public/uploads/large/purepng.com-laptop-notebooklaptopsnotebooknotebook-computerclamshell-1701528354976ljg2f.png',
      name: 'Laptop',
      price: 39.99
    }
  ]
};

// Populate the product list with example data
const productListItems = apiData.results.map(item => {
  return `
    <li>
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
    </li>
  `;
});
productList.innerHTML = productListItems.join('');