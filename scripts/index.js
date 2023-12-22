function toggleDropdown(event, dropdownContentId) {
    var dropdownContent = document.getElementById(dropdownContentId);
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    
    allDropdowns.forEach(function(item) {
        if (item.id !== dropdownContentId) {
            item.style.display = 'none';
        }
    });
    
    event.stopPropagation();
}


function toggleFollowClick(event, buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.toggle('clicked');
    button.textContent = button.classList.contains('clicked') ? 'Followed' : 'Follow';
    event.stopPropagation();
}


document.addEventListener('click', function(event) {
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function(item) {
        item.style.display = 'none';
    });
});

document.addEventListener('click', function() {
    var allButtons = document.querySelectorAll('.follow-button');
    allButtons.forEach(function(button) {
        button.classList.remove('clicked');
        button.textContent("Follow");
    });
});



// modal
var signUpModal = document.getElementById('signUpModal');
var signInModal = document.getElementById('signInModal');
var openSignUpModal = document.getElementById('openSignUpModal');
var openSignInModal = document.getElementById('openSignInModal');
var closeSignInBtn = document.getElementById('closeSignInBtn');
var closeSignUpBtn = document.getElementById('closeSignUpBtn');

// Check if elements exist before attaching event handlers
if (openSignUpModal && signUpModal) {
    openSignUpModal.addEventListener('click', function () {
        signUpModal.style.display = 'block';
        console.log("signup");
    });
}

if (openSignInModal && signInModal) {
    openSignInModal.addEventListener('click', function () {
        signInModal.style.display = 'block';
    });
}

if (closeSignInBtn && signInModal) {
    closeSignInBtn.addEventListener('click', function () {
        signInModal.style.display = 'none';
    });
}

if (closeSignUpBtn && signUpModal) {
    closeSignUpBtn.addEventListener('click', function () {
        signUpModal.style.display = 'none';
        console.log("clicked!");
    });
}

window.addEventListener('click', function (event) {
    if (event.target === signUpModal) {
        signUpModal.style.display = 'none';
    }
    if (event.target === signInModal) {
        signInModal.style.display = 'none';
    }
});