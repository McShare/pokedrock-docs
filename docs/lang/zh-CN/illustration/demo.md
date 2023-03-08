# 欢迎来到Demo网页

## [纯纯无聊瞎弄的，勿删---鴿子]

html
<!DOCTYPE html>
<html>
<head>
	<title>小游戏</title>
	<style>
		body {
			background-color: #f5f5f5;
			font-family: Arial, sans-serif;
		}
		h1 {
			text-align: center;
			margin-top: 50px;
		}
		.container {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin-top: 50px;
		}
		.box {
			width: 100px;
			height: 100px;
			background-color: #fff;
			border: 1px solid #ccc;
			margin: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24px;
			cursor: pointer;
		}
		.box.clicked {
			background-color: #ccc;
			color: #fff;
		}
	</style>
	<script>
		var score = 0;
		var time = 30;
		var timer;

		function initGame() {
			score = 0;
			time = 30;
			updateScore();
			updateTime();
			resetBoxes();
			startTimer();
		}

		function updateScore() {
			document.getElementById("score").innerHTML = score;
		}

		function updateTime() {
			document.getElementById("time").innerHTML = time;
		}

		function resetBoxes() {
			var boxes = document.getElementsByClassName("box");
			for (var i = 0; i < boxes.length; i++) {
				boxes[i].classList.remove("clicked");
				boxes[i].onclick = function() {
					if (this.classList.contains("clicked")) {
						score--;
					} else {
						score++;
						this.classList.add("clicked");
					}
					updateScore();
				}
			}
		}

		function startTimer() {
			timer = setInterval(function() {
				time--;
				updateTime();
				if (time == 0) {
					clearInterval(timer);
					alert("游戏结束，您的得分是：" + score);
				}
			}, 1000);
		}
	</script>
</head>
<body onload="initGame()">
	<h1>小游戏</h1>
	<div class="container">
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
	</div>
	<div style="text-align: center; margin-top: 50px;">
		<p>得分：<span id="score"></span></p>
		<p>剩余时间：<span id="time"></span></p>
	</div>
</body>
</html>

这个小游戏是一个简单的点击方块得分的游戏，共有9个方块，每次点击一个方块，如果这个方块已经被点击过了，则扣除1分，否则加1分。游戏时间为30秒，时间到了之后弹出得分提示框。
