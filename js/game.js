// var platforms = document.getElementsByClassName('platform');
var gameContainer = document.getElementById('game-container');
var clickableArea = document.getElementById('hero');
var speed = 2;  

// for (var i = 0; i < platforms.length; i++) {
//     platforms[i].style.left = (i * 58.75) + 'px';
// }

// function movePlatforms() {
//   for (var i = 0; i < platforms.length; i++) {
//     var platform = platforms[i];
//     var x = platform.offsetLeft;
//     x -= speed;
//     if (x + platform.offsetWidth < 0) {  
//       x = gameContainer.offsetWidth;
//     }
//     platform.style.left = x + 'px';
//   }
// }

// setInterval(movePlatforms, 20);

// ----------------------------------------------------

var player = document.getElementById('player');

player.style.animation = 'player-running 1s steps(6) infinite';

clickableArea.addEventListener('click', function() {
    if (player.style.animationName === 'player-jumping') return;

    player.style.animation = 'player-jumping 1s steps(4) forwards';

    setTimeout(function() {
        player.style.animation = 'player-running 1s steps(6) infinite';
    }, 1000); 
});

// --------------------------------------------------

function createCherry() {
    var cherry = document.createElement('div');
    var gameArea = document.querySelector('#game-container');
    cherry.classList.add('cherry');
    gameArea.appendChild(cherry);

    cherry.addEventListener('animationend', function() {
        if (document.body.contains(cherry)) {
            cherry.remove();
        }
    });

    var checkCollision = setInterval(function() {
        if (!document.body.contains(cherry)) {
            clearInterval(checkCollision);
            return;
        }
    
        var cherryRect = cherry.getBoundingClientRect();
        var playerRect = player.getBoundingClientRect();
        if (cherryRect.left < playerRect.right &&
            cherryRect.right > playerRect.left &&
            cherryRect.top < playerRect.bottom &&
            cherryRect.bottom > playerRect.top) {
            cherry.remove();
            clearInterval(checkCollision);
        }
    }, 100);
}

function randomInterval(min, max) {
    return Math.random() * (max - min) + min;
}


(function loop() {
    var rand = randomInterval(1000,3000);
    setTimeout(function() {
        createCherry();
        loop();  
    }, rand);
}());







