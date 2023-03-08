# 欢迎来到Demo网页

## [纯纯无聊瞎弄的，勿删---鴿子]

## 游戏列表

### 1. 猜数字游戏

#### 游戏规则

在游戏开始时，系统会随机生成一个 1 到 100 的整数，你需要在 10 次机会内猜出这个数字。每次猜完后，系统会告诉你猜的数字是大于还是小于目标数字，直到你猜中为止。

#### 游戏界面

请在下面输入你的猜测：

<input type="text" id="guessInput">
<button onclick="guess()">猜一下</button>

<p id="result"></p>

<script>

var target = Math.floor(Math.random() * 100) + 1;
var remainingGuesses = 10;

function guess() {
  var guessInput = document.getElementById("guessInput");
  var guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    alert("请输入一个数字！");
    return;
  }

  remainingGuesses--;

  if (guess === target) {
    document.getElementById("result").innerHTML = "恭喜你，猜对了！";
    return;
  }

  if (remainingGuesses === 0) {
    document.getElementById("result").innerHTML = "很遗憾，你没有猜中。正确答案是：" + target;
    return;
  }

  var hint = guess > target ? "大了" : "小了";
  document.getElementById("result").innerHTML = "你猜的数字" + hint + "，还剩下" + remainingGuesses + "次机会。";
}

</script>

### 2. 打地鼠游戏

#### 游戏规则

在游戏开始时，地鼠会随机从洞口中冒出来，你需要在有限的时间内尽可能多地打中它们。每打中一个地鼠，你会得到一定的分数，打中越多分数越高。

#### 游戏界面

<div id="gameArea">
  <div class="hole"></div>
  <div class="hole"></div>
  <div class="hole"></div>
  <div class="hole"></div>
  <div class="hole"></div>
  <div class="hole"></div>
</div>

<p>得分：<span id="score">0</span></p>
<p>时间：<span id="time">60</span>秒</p>

<script>

var score = 0;
var time = 60;

function startGame() {
  setInterval(function() {
    time--;
    document.getElementById("time").innerHTML = time + "秒";
    if (time === 0) {
      endGame();
    }
  }, 1000);

  var holes = document.getElementsByClassName("hole");
  for (var i = 0; i < holes.length; i++) {
    holes[i].addEventListener("click", function() {
      score++;
      document.getElementById("score").innerHTML = score;
    });
  }
}

function endGame() {
  var holes = document.getElementsByClassName("hole");
  for (var i = 0; i < holes.length; i++) {
    holes[i].removeEventListener("click", function() {
      score++;
      document.getElementById("score").innerHTML = score;
    });
  }

  alert("时间到！你的得分是：" + score);
}

</script>

