# GDF.Estate - Real Estate Property Finder 

Welcome to **GDF.Estate**! This is a dynamic, client-side web application built for my Mid-Term Project in the **Internet and Web Programming** course. 

The website helps users find their dream properties (for sale or rent) in Turkey using a fast, interactive interface without needing to refresh the page.

## Key Features

* **Real-Time Search & Filtering:** Users can search properties by name, or filter them by city (Istanbul, Ankara, Antalya) and status (For Sale, For Rent). The results update instantly using JavaScript array filtering.
* *VIP Featured Slider:* A custom-built horizontal image slider that displays featured properties. It uses native JavaScript scrolling (`scrollBy`) without any external libraries.
* **Dark Mode Toggle:** A fully functional dark/light mode switch. It uses `localStorage` to remember the user's preference even if they close or refresh the browser.
* *Responsive Design:* The layout is built using CSS Flexbox and CSS Grid, ensuring the website looks great on both desktop computers and mobile phones.
* **Dynamic DOM Manipulation:** All property cards are generated dynamically using JavaScript (`document.createElement`) from an array of objects, keeping the HTML file clean and organized.

##  Technologies Used

This project strictly follows the mid-term scope and is built completely from scratch using pure, core web technologies (No external frameworks or libraries were used):

* **HTML5:** For the structure and semantic elements.
* **CSS3:** For styling, animations, Flexbox, Grid, and Dark Mode themes.
* **Vanilla JavaScript (ES6):** For the logic, DOM manipulation, event listeners, and data filtering.

##  Project Structure

The project is modular and separated into three main files:

* `index.html` - The main structure and user interface.
* `style.css` - The design and responsive layout rules.
* `script.js` - The brain of the website (contains the property data array and all filtering/slider logic).
* `/images` - A folder containing the local, high-quality images for the properties.

##  How to Run the Project

Since this is a client-side only application, no server setup is required. 

1. Download or clone this repository to your local machine.
2. Make sure the `images` folder is in the same directory as the other files.
3. Simply double-click on `index.html` to open it in your favorite web browser (Chrome, Firefox, Safari, etc.).
4. Enjoy browsing the properties!

---
*Developed by: Ahmed Alghadanfari
*Student ID: 250418084
