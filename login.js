
// Handle Signup
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Check if the username or email already exists
    if (users.some(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }
    if (users.some(user => user.email === email)) {
        alert('Email already exists!');
        return;
    }

    // Add the new user data
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    alert('Your account has been created successfully! Redirecting to login page.');

    // Redirect to login page after successful signup
    window.location.href = 'login.html';
});

// Handle Login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username);
        alert('Login successful! Redirecting to your blog.');
        window.location.href = 'blog.html'; // Redirect to the blog.html page after successful login
    } else {
        // Show error message and link to sign up
        document.getElementById('loginError').style.display = 'block';
    }
});



fetch('http://127.0.0.1:5500/project/login.html')
  .then(response => {
    console.log('HTTP Status Code:', response.status); // This will log the status code
    if (response.ok) {
      // HTTP status code is in the range 200-299
      return response.json(); // or response.text(), etc., depending on the content type
    } else {
      console.log('Error:', response.statusText);
    }
  })
  .then(data => {
    console.log('Response Data:', data);
  })
  .catch(error => {
    console.error('Fetch Error:', error);
  });

