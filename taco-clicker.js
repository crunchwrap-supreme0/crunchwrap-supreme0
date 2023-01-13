let score = 0;
let upgrades = [0, 1, 15, 150, 2000, 40000, 100000];
let goal = [100, 1000, 10000, 100000, 1000000, 10000000, 100000000];
let current = 0;
let intervalId;

document.getElementById("taco-image").addEventListener("click", function() {
  score += 10;
  document.getElementById("score").innerHTML = score;
  document.getElementById("taco-image").classList.toggle("explode");
});

function updateGoal() {
    document.getElementById("upgradeButton").innerHTML = "UPGRADE - $" + goal[current];
}

function upgrade() {
    if(score >= goal[current]) {
        score -= goal[current];
        current++;
        document.getElementById("score").innerHTML = score;
        intervalId = setInterval(function() {
            score += upgrades[current];
            document.getElementById("score").innerHTML = score;
            updateGoal();
        }, 1000);
    }
    else if(upgrades > 1){
        clearInterval(intervalId);
    }
}