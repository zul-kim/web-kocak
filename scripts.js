// scripts.js
document.getElementById('surpriseButton').addEventListener('click', function() {
    var message = document.getElementById('surpriseMessage');
    if (message.style.display === 'none') {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
});
document.getElementById('ygkedua').addEventListener('click', function() {
    var message = document.getElementById('ygkedua2');
    if (message.style.display === 'none') {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
});
// Update scripts.js
document.getElementById('surpriseButton').addEventListener('click', function() {
    var message = document.getElementById('surpriseMessage');
    if (message.classList.contains('show')) {
        message.classList.remove('show');
        setTimeout(() => {
            message.style.display = 'none';
        }, 500);
    } else {
        message.style.display = 'block';
        setTimeout(() => {
            message.classList.add('show');
        }, 10);
    }
});



