// Start the journey when "Start the Journey" button is clicked
document.querySelector('.start-btn').addEventListener('click', () => {
    document.getElementById('forest').style.display = 'none';
    document.getElementById('lake').style.display = 'block';
});

// Revisit the adventure and go back to the first scene
document.querySelector('.revisit-btn').addEventListener('click', () => {
    window.location.reload(); // Reload the page to restart the adventure
});
