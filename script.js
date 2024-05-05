document.addEventListener('DOMContentLoaded', function() {
    var themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('click', function() {
        var body = document.body;
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        var currentSrc = themeToggle.src;
        var newSrc = currentSrc.includes('img/sun.png') ? 'img/moon.png' : 'img/sun.png';
        themeToggle.src = newSrc;

        
        var theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    
    applyTheme();
});

function applyTheme() {
    var body = document.body;
    var theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }
}

