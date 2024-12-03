// JavaScript to handle section switching
function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active')); // Remove 'active' class from all sections

    // Show the selected section
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.classList.add('active'); // Add 'active' class to the clicked section
    }
}
