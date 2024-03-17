// Get the modal elements
const signupModal = document.getElementById('signupModal');
const signinModal = document.getElementById('signinModal');
const createPostModal = document.getElementById('createPostModal');

// Get the button that opens the modal
const signupBtn = document.getElementById('signupBtn');
const signinBtn = document.getElementById('signinBtn');
const allPostsBtn = document.getElementById('allPostsBtn');
const createPostBtn = document.getElementById('createPostBtn');

// Get the <span> element that closes the modal
const closeButtons = document.getElementsByClassName('close');

// Open Sign Up Modal
signupBtn.onclick = function() {
    signupModal.style.display = 'block';
}

// Open Sign In Modal
signinBtn.onclick = function() {
    signinModal.style.display = 'block';
}

// Close Modals
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        signupModal.style.display = 'none';
        signinModal.style.display = 'none';
        createPostModal.style.display = 'none';
    }
}

// Open Create Post Modal
createPostBtn.onclick = function() {
    createPostModal.style.display = 'block';
}

// Close modal when clicked outside of it
window.onclick = function(event) {
    if (event.target == signupModal || event.target == signinModal || event.target == createPostModal) {
        signupModal.style.display = 'none';
        signinModal.style.display = 'none';
        createPostModal.style.display = 'none';
    }
}
document.getElementById("createPostButton").addEventListener("click", function() {
    document.getElementById("createPostModal").style.display = "block";
});
