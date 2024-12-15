// Function to handle the submit event when the 'Make a wish' button is clicked
function SubmitEvent() {
    // Get the value of the wish entered by the user
    const userWish = document.getElementById('wishes').value;
    
    // Check if the user has entered a wish
    if (userWish) {
        // Display the wish in an alert (you can modify this to display it anywhere on the page)
        alert(`Your wish: "${userWish}" has been made! 🎉`);
        
        // Optionally, clear the input field after the wish is submitted
        document.getElementById('wishes').value = '';
    } else {
        // If no wish is entered, show a prompt to the user
        alert('Please enter your wish before submitting!');
    }
}

// Attach the SubmitEvent function to the button click event
document.getElementById('wish_button').addEventListener('click', SubmitEvent);
