let score = 0;

document.getElementById("taco-image").addEventListener("click", function() {
  score++;
  document.getElementById("score").innerHTML = score;
});
