// Login/Signup Modal Toggle
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('authModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('authModal').style.display = 'none';
});

// Contact Form Submission (For Now, Just Alerts)
document.querySelector(".contact form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});
