/*document.addEventListener("DOMContentLoaded", () => {
    fetch("tasks.json")
        .then(response => response.json())
        .then(data => loadTasks(data.works)) 
        .catch(error => console.error("Error loading tasks:", error));
});

function loadTasks(works) {
    const nav = document.getElementById("nav_id");

    for (const key in works) {
        let btn = document.createElement("button");
        btn.textContent = works[key].title;
        btn.classList.add("nav-button");
        btn.onclick = () => {
            document.getElementById("content_frame").src = works[key].url;
        };
        nav.appendChild(btn);
    }
}*/

document.addEventListener("DOMContentLoaded", () => {
    fetch("tasks.json")
        .then(response => response.json())
        .then(data => loadTasks(data.works)) 
        .catch(error => console.error("Error loading tasks:", error));
});

function loadTasks(works) {
    const nav = document.getElementById("nav_id");
    const descContainer = document.getElementById("description"); // Reference to description container
    const iframe = document.getElementById("content_frame"); // Reference to iframe

    for (const key in works) {
        let btn = document.createElement("button");
        btn.textContent = works[key].title;
        btn.classList.add("nav-button");
        btn.onclick = () => {
            iframe.src = works[key].url;
            descContainer.textContent = works[key].description || "No description available."; // Update description
        };
        nav.appendChild(btn);
    }
}


