// My array of objects to store property data. I used local images from my 'images' folder.
const properties = [
    { id: 1, name: "Luxury Bosphorus Villa", city: "Istanbul", price: "355,000,000 ₺", status: "sale", image: "images/prop1.jpg" },
    { id: 2, name: "Cozy Kadikoy Apartment", city: "Istanbul", price: "45,000 ₺ / month", status: "rent", image: "images/prop2.jpg" },
    { id: 3, name: "Modern Cankaya Studio", city: "Ankara", price: "25,000 ₺ / month", status: "rent", image: "images/prop3.jpg" },
    { id: 4, name: "Sisli Penthouse", city: "Istanbul", price: "70,000,000 ₺", status: "sale", image: "images/prop4.jpg" },
    { id: 5, name: "Lara Beachfront Mansion", city: "Antalya", price: "60,000,000 ₺", status: "sale", image: "images/prop5.jpg" },
    { id: 6, name: "Kepez Family Home", city: "Antalya", price: "30,000 ₺ / month", status: "rent", image: "images/prop6.jpg" }
];

// Getting HTML elements by their ID
const propertyGrid = document.getElementById('propertyGrid');
const searchInput = document.getElementById('searchInput');
const cityFilter = document.getElementById('cityFilter');
const statusFilter = document.getElementById('statusFilter');

// Function to show the properties on the webpage
function displayProperties(propertiesToDisplay) {
    propertyGrid.innerHTML = ''; // Clear the grid first

    // If the search has no results, show a message
    if (propertiesToDisplay.length === 0) {
        propertyGrid.innerHTML = '<p class="no-results">No properties found matching your search.</p>';
        return;
    }

    // Loop through the array and create a card for each property
    propertiesToDisplay.forEach(prop => {
        propertyGrid.appendChild(createPropertyCard(prop));
    });
}

// Function to filter properties when the user types or selects options
function filterProperties() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCity = cityFilter.value;
    const selectedStatus = statusFilter.value;

    // Use the filter method to keep only matching properties
    const filtered = properties.filter(prop => {
        const matchesSearch = prop.name.toLowerCase().includes(searchTerm);
        const matchesCity = selectedCity === 'all' || prop.city === selectedCity;
        const matchesStatus = selectedStatus === 'all' || prop.status === selectedStatus;
        
        // It must match all 3 conditions to be shown
        return matchesSearch && matchesCity && matchesStatus;
    });

    displayProperties(filtered); // Update the screen with the new list
}

// --- Code for the VIP Featured Slider ---
const featuredSlider = document.getElementById('featuredSlider');
const slideLeft = document.getElementById('slideLeft');
const slideRight = document.getElementById('slideRight');

function displayFeaturedSlider() {
    // I only want the first 4 properties in the slider
    const vipProperties = properties.slice(0, 4);
    featuredSlider.innerHTML = '';
    
    vipProperties.forEach(prop => {
        featuredSlider.appendChild(createPropertyCard(prop));
    });
}

// Helper function to build the HTML for a card (so I don't repeat my code)
function createPropertyCard(prop) {
    const card = document.createElement('div');
    card.className = 'property-card';
    
    // Check if it's for sale or rent to change the badge text and color
    const badgeText = prop.status === 'sale' ? 'For Sale' : 'For Rent';
    const badgeClass = prop.status === 'sale' ? 'status-sale' : 'status-rent';

    card.innerHTML = `
        <div class="status-badge ${badgeClass}">${badgeText}</div>
        <img src="${prop.image}" alt="${prop.name}" class="property-img">
        <div class="property-info">
            <h3>${prop.name}</h3>
            <p>📍 ${prop.city}</p>
            <p class="price">${prop.price}</p>
        </div>
    `;
    return card;
}

// Making the slider buttons work
slideLeft.addEventListener('click', () => {
    featuredSlider.scrollBy({ left: -350, behavior: 'smooth' }); // Scroll left
});

slideRight.addEventListener('click', () => {
    featuredSlider.scrollBy({ left: 350, behavior: 'smooth' }); // Scroll right
});

// Listeners: Run the filter function whenever the user changes an input
searchInput.addEventListener('input', filterProperties);
cityFilter.addEventListener('change', filterProperties);
statusFilter.addEventListener('change', filterProperties);

// Show everything when the page first loads
displayProperties(properties);
displayFeaturedSlider();


// --- Dark Mode Logic ---
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// 1. Check if the user previously enabled dark mode (saving it in localStorage)
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// 2. If it was enabled before, apply it immediately when the page loads
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
}

// 3. Listen for clicks on the toggle button
darkModeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');
    
    // Check if dark mode is currently active
    if (body.classList.contains('dark-mode')) {
        // Save the choice and change button text
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        // Remove the choice and change button text back
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});