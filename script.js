{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Predefined city data\
const cityData = \{\
    "paris": [\
        \{ name: "Eiffel Tower", price: "$", img: "https://via.placeholder.com/250" \},\
        \{ name: "Louvre Museum", price: "$$", img: "https://via.placeholder.com/250" \},\
        \{ name: "Notre-Dame Cathedral", price: "$", img: "https://via.placeholder.com/250" \}\
    ],\
    "london": [\
        \{ name: "Big Ben", price: "$", img: "https://via.placeholder.com/250" \},\
        \{ name: "London Eye", price: "$$", img: "https://via.placeholder.com/250" \},\
        \{ name: "British Museum", price: "$$", img: "https://via.placeholder.com/250" \}\
    ],\
    "tokyo": [\
        \{ name: "Tokyo Tower", price: "$", img: "https://via.placeholder.com/250" \},\
        \{ name: "Shibuya Crossing", price: "$", img: "https://via.placeholder.com/250" \},\
        \{ name: "Senso-ji Temple", price: "$", img: "https://via.placeholder.com/250" \}\
    ]\
\};\
\
// Ensure that the event listener is properly attached to the form\
document.getElementById("searchForm").addEventListener("submit", function(e) \{\
    e.preventDefault();  // Prevent form submission, so the page doesn't refresh\
\
    const cityInput = document.getElementById("cityInput").value.trim().toLowerCase();\
\
    console.log(`User input: $\{cityInput\}`); // Debugging line - show user input\
\
    // Check if city data exists for the input city\
    if (cityData[cityInput]) \{\
        console.log(`City found: $\{cityInput\}`); // Debugging line - confirm city is found\
        displayResults(cityInput);\
    \} else \{\
        console.log(`No results for $\{cityInput\}`); // Debugging line - show if city isn't found\
        alert("No results found for this city. Please try another.");\
    \}\
\});\
\
// Display the results for the city\
function displayResults(city) \{\
    document.getElementById("homePage").style.display = "none";\
    document.getElementById("resultsPage").style.display = "block";\
    document.getElementById("cityName").textContent = capitalizeFirstLetter(city);\
\
    // Get the grid container\
    const grid = document.getElementById("resultsGrid");\
    grid.innerHTML = ""; // Clear any previous results\
\
    // Populate grid with city data\
    cityData[city].forEach(item => \{\
        const gridItem = document.createElement("div");\
        gridItem.classList.add("grid-item");\
        gridItem.innerHTML = `\
            <img src="$\{item.img\}" alt="$\{item.name\}">\
            <h3>$\{item.name\}</h3>\
            <p>Price: $\{item.price\}</p>\
            <a href="#">More Info</a>\
        `;\
        grid.appendChild(gridItem);\
    \});\
\}\
\
// Capitalize the first letter of each word in the city name\
function capitalizeFirstLetter(city) \{\
    return city.charAt(0).toUpperCase() + city.slice(1);\
\}\
\
// Go back to the home page\
function goBack() \{\
    document.getElementById("resultsPage").style.display = "none";\
    document.getElementById("homePage").style.display = "block";\
    document.getElementById("cityInput").value = ""; // Clear the search input\
\}\
}