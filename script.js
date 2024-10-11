// Handle search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchBar').value;
    fetchJobs(searchTerm);
});

// Modal functionality
const loginModal = document.getElementById('loginModal');
const createAccountModal = document.getElementById('createAccountModal');
const postJobModal = document.getElementById('postJobModal');

// Open modals
document.getElementById('loginButton').onclick = function() {
    loginModal.style.display = "block";
}

document.getElementById('createAccountButton').onclick = function() {
    createAccountModal.style.display = "block";
}

document.getElementById('postJobButton').onclick = function() {
    postJobModal.style.display = "block";
}

// Close modals
document.getElementById('closeLogin').onclick = function() {
    loginModal.style.display = "none";
}

document.getElementById('closeCreateAccount').onclick = function() {
    createAccountModal.style.display = "none";
}

document.getElementById('closePostJob').onclick = function() {
    postJobModal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target === createAccountModal) {
        createAccountModal.style.display = "none";
    }
    if (event.target === postJobModal) {
        postJobModal.style.display = "none";
    }
}

// Handle form submissions
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Login submitted!');
    loginModal.style.display = 'none';
}

document.getElementById('createAccountForm').onsubmit = function(event) {
    event.preventDefault();

    const email = document.getElementById('createEmail').value;
    const password = document.getElementById('createPassword').value;
    const bankAccountNumber = document.getElementById('bankAccountNumber').value;
    const ifscCode = document.getElementById('ifscCode').value;
    const identityProof = document.getElementById('identityProof').value;

    alert(`Account created!\nEmail: ${email}\nBank Account Number: ${bankAccountNumber}\nIFSC Code: ${ifscCode}\nIdentity Proof: ${identityProof}`);
    createAccountModal.style.display = 'none';
}

// Handle job posting
document.getElementById('postJobForm').onsubmit = function(event) {
    event.preventDefault();

    const title = document.getElementById('jobTitle').value;
    const approxTime = document.getElementById('approxTime').value;
    const amount = document.getElementById('amount').value;
    const location = document.getElementById('location').value;
    const image = document.getElementById('jobImage').files[0];

    alert(`Job Posted!\nTitle: ${title}\nApprox Time: ${approxTime} hours\nAmount: $${amount}/hr\nLocation: ${location}`);
    postJobModal.style.display = 'none';
}

// Placeholder function to simulate job fetching
function fetchJobs(searchTerm) {
    const jobsList = document.getElementById('jobsList');
    jobsList.innerHTML = ''; // Clear previous results

    // Simulated job data
    const jobs = [
        { title: 'Software Developer', location: 'New York' },
        { title: 'Web Designer', location: 'San Francisco' },
        { title: 'Data Analyst', location: 'Chicago' }
    ];

    // Display jobs
    jobs.forEach(job => {
        const li = document.createElement('li');
        li.textContent = `${job.title} - ${job.location}`;
        jobsList.appendChild(li);
    });
}
