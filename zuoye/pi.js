document.addEventListener('DOMContentLoaded', (event) => {
  const num1 = Math.floor(Math.random() * 10000) + 1;
  const num2 = Math.floor(Math.random() * 10000) + 1;
  const correctAnswer = num1 + num2;

  // 显示谜题问题
  document.getElementById('question').textContent = `计算: ${num1} + ${num2} =`;

  const form = document.getElementById('puzzleForm');
  const resultBox = document.getElementById('result');

  form.onsubmit = function(event) {
    event.preventDefault(); // 防止表单提交后重新加载页面
    const userAnswer = parseInt(document.getElementById('userAnswer').value, 10);

    if (userAnswer === correctAnswer) {
      resultBox.textContent = "你答对了！真厉害!";
      // 用户答案正确时，跳转到目标网页
      window.location.href = 'https://space.bilibili.com/367342277';
    } else {
      // 答案错误时通知用户
      resultBox.textContent = "回答错了捏，再试试吧~";
    }
  };
});
