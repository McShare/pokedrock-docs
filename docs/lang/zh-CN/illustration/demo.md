# 欢迎来到功能性网页

## [纯纯无聊瞎弄的，勿删---鴿子]

## 功能介绍

这是一个华丽的功能性网页，使用了Markdown语法来编写。它提供了以下功能：

- 计算器
- 时钟
- 天气预报

## 计算器

在下面的输入框中输入表达式，点击“计算”按钮即可得到计算结果。

<input type="text" id="expression" placeholder="请输入表达式">
<button onclick="calculate()">计算</button>
<p id="result"></p>

<script>
function calculate() {
  var expression = document.getElementById("expression").value;
  var result = eval(expression);
  document.getElementById("result").innerHTML = "计算结果：" + result;
}
</script>

## 时钟

下面是一个实时显示当前时间的时钟。

<p id="clock"></p>

<script>
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = "当前时间：" + timeString;
}
setInterval(updateClock, 1000);
</script>

## 天气预报

在下面的输入框中输入城市名称，点击“查询”按钮即可得到该城市的天气预报。

<input type="text" id="city" placeholder="请输入城市名称">
<button onclick="getWeather()">查询</button>
<p id="weather"></p>

<script>
function getWeather() {
  var city = document.getElementById("city").value;
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=YOUR_API_KEY&units=metric";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      var weather = data.weather[0].description;
      var temperature = data.main.temp;
      document.getElementById("weather").innerHTML = "天气预报：" + weather + "，温度：" + temperature + "℃";
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "查询失败，请检查城市名称是否正确。";
    });
}
</script>

## 结语

感谢您来访我的功能性网页，希望您喜欢这些功能。如果您有任何建议或意见，请随时联系我。
