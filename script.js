var heightDom = 170;
var heightAlex = 180
var ageDom = 31;
var ageAlex = 35;

var scoreDom = heightDom + 5 * ageDom; 
var scoreAlex = heightAlex + 5 * ageAlex;

/*
if (scoreDom > scoreAlex) {
    console.log('Dom wins the game with ' + scoreDom + ' points ');
} else if (scoreAlex > scoreDom) {
    console.log('Alex wins the game with ' + scoreAlex + ' points ');
} else if (scoreDom === scoreAlex) {
    console.log('there is a draw.');
}*/

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreDom > scoreAlex && scoreDom > scoreMary) {
     console.log('Dom wins the game with ' + scoreDom + ' points ');
} else if (scoreAlex> scoreDom && scoreAlex > scoreMary) {
     console.log('Alex wins the game with ' + scoreAlex + ' points ');
} else if (scoreMary > scoreDom && scoreMary > scoreAlex) {
     console.log('Mary wins the game with ' + scoreAlex + ' points ');
} else {
    console.log('It\'s a draw.');
}
