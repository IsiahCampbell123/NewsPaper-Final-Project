// JavaScript to manage the popup behavior
document.getElementById("show-news").addEventListener("click", function() {
    document.getElementById("news-popup").style.display = "block"; // Show the popup
});

document.getElementById("close-news").addEventListener("click", function() {
    document.getElementById("news-popup").style.display = "none"; // Hide the popup
});
