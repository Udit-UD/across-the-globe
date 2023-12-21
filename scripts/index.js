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