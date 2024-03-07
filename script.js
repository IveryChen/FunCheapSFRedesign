document.addEventListener("DOMContentLoaded", function() {
    const categories = [
        "All",
        "Art & Meseums",
        "Charity & Volunteering",
        "Club/DJ",
        "Eating & Drinking",
        "Fairs & Festivals",
        "Free Stuff",
        "Fun & Games",
        "Geek Event",
        "Kids & Families",
        "Lectures & Workshops",
        "Literature",
        "Live Music",
        "Movies",
        "Shopping & Fashion",
        "Sports & Fitness",
        "Theater & Performance & Fitness"
    ];

    const categoryContainer = document.getElementById("category-container");

    categories.forEach(function(category) {
        const div = document.createElement("div");
        div.classList.add("category-frame");
        if (category === "All") {
            div.classList.add("category-frame-selected");
        }
        const p = document.createElement("p");
        p.classList.add("p5");
        p.textContent = category;
        div.appendChild(p);
        categoryContainer.appendChild(div);
    });
});



const cardsData = [
    {
        category: "Art & Museums",
        imageSrc: "./assets/TerrorVault.jpeg",
        altText: "Terror Vault",
        title: "Terror Vault 1874 Spring Haunt",
        description: "San Francisco’s premiere haunted attraction returns for a brand new season with “The Initiation” an all-new, bigger, and more terrifying theatrical and immersive experience...",
        time: "08:00am - 11:00pm",
        price: "Free"
    },
    {
        category: "Eating & Drinking",
        imageSrc: "./assets/taco.jpeg",
        altText: "Tacos",
        title: "“Pay-What-You-Can” Taco Day",
        description: "Every Friday from 11am to 5 pm, customers can order off the Taco Love menu and pay anywhere from $0 up to $10. When a customer pays the full price of $10, TATO will give a free meal to someone in need in The City.",
        time: "11:00am - 5:00pm",
        price: "Free"
    }
    // Add more card data as needed
];

// Function to create a card element
function createCard(cardData) {
    const cardContainer = document.getElementById("card-container");
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardContent = `
        <img src="${cardData.imageSrc}" class="rounded-image" alt="${cardData.altText}">
        <div class="card-content">
            <div class="category-frame">
                <p class="p5">${cardData.category}</p>
            </div>
            <p class="p7">${cardData.title}</p>
            <div class="description">
                <p class="p8">${cardData.description}</p>
            </div>
            <div class="time-price">
                <p class="p7">${cardData.time}</p>
                <p class="p9">${cardData.price}</p>
            </div>
        </div>
    `;

    cardDiv.innerHTML = cardContent;
    cardContainer.appendChild(cardDiv);
}

// Loop through cardsData and create card elements
cardsData.forEach(cardData => {
    createCard(cardData);
});