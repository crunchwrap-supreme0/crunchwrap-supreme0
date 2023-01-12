let score = 0;
let upgrades = 0;
let goal = 100;
let intervalId;

document.getElementById("taco-image").addEventListener("click", function() {
  score += 10;
  document.getElementById("score").innerHTML = score;
});

function updateGoal() {
    document.getElementById("goal").innerHTML = goal;
}

function upgrade() {
    if(score >= 100 && upgrades == 0) {
        score -= 100;
        upgrades++;
        document.getElementById("score").innerHTML = score;
        goal = 1000;
        intervalId = setInterval(function() {
            score++;
            document.getElementById("score").innerHTML = score;
            updateGoal();
        }, 1000);
    }
    else if(score >= 1000 && upgrades == 1)
    {
        score -= 1000;
        upgrades++;
        document.getElementById("score").innerHTML = score;
        goal = 10000;
        intervalId = setInterval(function() {
            score += 10;
            document.getElementById("score").innerHTML = score;
            updateGoal();
        }, 1000);
    }
    else if(score >= 10000 && upgrades == 2)
    {
        score -= 10000;
        upgrades++;
        document.getElementById("score").innerHTML = score
        goal = 100000;
        intervalId = setInterval(function() {
        score += 100;
        document.getElementById("score").innerHTML = score;
        updateGoal();
        }, 1000);
        }
        else if(score >= 100000 && upgrades == 2)
        {
        score -= 100000;
        upgrades++;
        document.getElementById("score").innerHTML = score;
        goal = 1000000;
        intervalId = setInterval(function() {
        score += 10000;
        document.getElementById("score").innerHTML = score;
        updateGoal();
        }, 1000);
        }
        else if(upgrades > 1){
        clearInterval(intervalId);
        }
}