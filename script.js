// JavaScript code for form validation

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all the fields.');
      return;
    }
  
    // Code for sending the form data to a server or handling it locally
    // You can customize this part to suit your needs
  
    alert('Message sent successfully!');
    document.getElementById('contactForm').reset();
  });
  