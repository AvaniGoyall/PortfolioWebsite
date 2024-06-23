document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('contactno').value;
    const message = document.getElementById('message').value;
    
    const data = {
        name: name,
        email: email,
        contactno : contactno,
        message: message
    };
    
    fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        alert('There was an error sending your message.');
        console.error('Error:', error);
    });
});