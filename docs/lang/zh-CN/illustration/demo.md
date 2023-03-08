```markdown
# 欢迎来到我的网页！

## 介绍

这个网页是一个有趣的小游戏，你需要通过回答问题来获得分数。每个问题都有四个选项，只有一个是正确的。如果你回答正确，你将获得10分。如果你回答错误，你将失去5分。你需要在60秒内回答尽可能多的问题，最后得分最高的人将成为胜利者！

## 游戏开始

点击下面的按钮开始游戏：

<button onclick="startGame()">开始游戏</button>

<div id="question" style="display:none;">
	<h2 id="question-text"></h2>
	<ul id="options">
		<li><button onclick="checkAnswer(0)">选项1</button></li>
		<li><button onclick="checkAnswer(1)">选项2</button></li>
		<li><button onclick="checkAnswer(2)">选项3</button></li>
		<li><button onclick="checkAnswer(3)">选项4</button></li>
	</ul>
</div>

<div id="score" style="display:none;">
	<h2>你的得分是：<span id="score-text"></span></h2>
	<button onclick="restartGame()">重新开始</button>
</div>

<script>
	var questions = [
		{
			question: "问题1：这是一个问题吗？",
			options: ["是", "不是", "可能是", "不确定"],
			answer: 0
		},
		{
			question: "问题2：这个网页有多有趣？",
			options: ["非常有趣", "有点有趣", "一般般", "不太有趣"],
			answer: 0
		},
		{
			question: "问题3：这个游戏有多难？",
			options: ["非常难", "有点难", "一般般", "很容易"],
			answer: 1
		},
		{
			question: "问题4：这个网页是用什么语言编写的？",
			options: ["HTML", "CSS", "JavaScript", "Markdown"],
			answer: 2
		},
		{
			question: "问题5：这个网页的作者是谁？",
			options: ["你", "我", "他", "她"],
			answer: 0
		}
	];

	var currentQuestion = 0;
	var score = 0;
	var timeLeft = 60;
	var timer;

	function startGame() {
		document.getElementById("question").style.display = "block";
		document.getElementById("score").style.display = "none";
		showQuestion();
		timer = setInterval(updateTimer, 1000);
	}

	function showQuestion() {
		document.getElementById("question-text").innerHTML = questions[currentQuestion].question;
		for (var i = 0; i < 4; i++) {
			document.getElementById("options").getElementsByTagName("button")[i].innerHTML = questions[currentQuestion].options[i];
		}
	}

	function checkAnswer(option) {
		if (option == questions[currentQuestion].answer) {
			score += 10;
		} else {
			score -= 5;
		}
		currentQuestion++;
		if (currentQuestion < questions.length) {
			showQuestion();
		} else {
			endGame();
		}
	}

	function endGame() {
		clearInterval(timer);
		document.getElementById("question").style.display = "none";
		document.getElementById("score").style.display = "block";
		document.getElementById("score-text").innerHTML = score;
	}

	function restartGame() {
		currentQuestion = 0;
		score = 0;
		timeLeft = 60;
		startGame();
	}

	function updateTimer() {
		timeLeft--;
		if (timeLeft <= 0) {
			endGame();
		}
	}
</script>
```
