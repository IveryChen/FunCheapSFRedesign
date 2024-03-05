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