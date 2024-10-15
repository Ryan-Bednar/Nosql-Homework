const playGame = function () {
  const stats = {
    wins: 0,
    ties: 0,
    losses: 0,
    count: {
      rock: 0,
      paper: 0,
      scissors: 0,
    },
  };

  const options = ["R", "P", "S"];

  do {
    let userChoice = window.prompt("Enter R, P, or S:");

    if (!userChoice) {
      continue;
    }

    userChoice = userChoice.toLocaleUpperCase();

    if (!options.includes(userChoice)) {
      window.alert("Please enter a valid choice");
    } else {
      if (userChoice === "R") {
        stats.count.rock++;
      } else if (userChoice === "P") {
        stats.count.paper++;
      } else {
        stats.count.scissors++;
      }

      const index = Math.floor(Math.random() * options.length);
      const computerChoice = options[index];

      window.alert(`The computer chose ${computerChoice}`);

      if (userChoice === computerChoice) {
        stats.ties++;
        window.alert("It's a tie");
      } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
      ) {
        stats.wins++;
        window.alert("You win!");
      } else {
        stats.losses++;
        window.alert("Computer wins!");
      }
    }
  } while (window.confirm("Play again?"));

  window.alert(`
    Stats:

    Wins:   ${stats.wins}
    Losses: ${stats.losses}
    Ties:   ${stats.ties}
    
    Your choices:
    
    Rock:       ${stats.count.rock}
    Paper:      ${stats.count.paper}
    Scissors:   ${stats.count.scissors}`);
};

playGame();
