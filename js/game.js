var platforms = document.getElementsByClassName('platform');
var gameContainer = document.getElementById('game-container');
var speed = 2;  // 每帧移动的像素数

// 设定初始位置
for (var i = 0; i < platforms.length; i++) {
    platforms[i].style.left = (i * 58.75) + 'px';
}

// 然后进行移动
function movePlatforms() {
  for (var i = 0; i < platforms.length; i++) {
    var platform = platforms[i];
    var x = platform.offsetLeft;
    x -= speed;
    if (x + platform.offsetWidth < 0) {  // 当平台完全移出 div 左侧时
      x = gameContainer.offsetWidth;  // 将平台移动到 div 右侧
    }
    platform.style.left = x + 'px';
  }
}

setInterval(movePlatforms, 20);  // 每 20 毫秒（约 50 帧/秒）调用一次 movePlatforms()

// ----------------------------------------------------

var player = document.getElementById('player');

// 初始的跑步动画
player.style.animation = 'player-running 1s steps(6) infinite';

// 监听点击事件
window.addEventListener('click', function() {
    // 如果已经在跳跃（即动画为jumping），就不做任何事
    if (player.style.animationName === 'player-jumping') return;

    // 切换到跳跃动画
    player.style.animation = 'player-jumping 1s steps(4) forwards';

    // 跳跃动画播放完毕后，再切换回跑步动画
    setTimeout(function() {
        player.style.animation = 'player-running 1s steps(6) infinite';
    }, 1000);  // 假设跳跃动画的总时长是 1000 毫秒
});

// --------------------------------------------------

function createCherry() {
    var cherry = document.createElement('div');
    var gameArea = document.querySelector('#game-container');
    cherry.classList.add('cherry');
    gameArea.appendChild(cherry);

    // 监听动画结束事件，动画结束时删除樱桃
    cherry.addEventListener('animationend', function() {
        if (document.body.contains(cherry)) {
            cherry.remove();
        }
    });

    // 检查是否碰到玩家，如果碰到则删除樱桃
    var checkCollision = setInterval(function() {
        if (!document.body.contains(cherry)) {
            // 如果樱桃已经被移除，就停止碰撞检测
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

// 每隔一段随机时间创建一个樱桃
(function loop() {
    var rand = randomInterval(1000,3000); // 创建一个介于 1000 和 3000 毫秒之间的随机时间
    setTimeout(function() {
        createCherry();
        loop();  
    }, rand);
}());







