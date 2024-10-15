// Window
console.log(this);

// Window
function helloThis() {
  console.log(`Inside this function, this is ${this}`);
}

// This would log 20
const child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// This would log 5750
const investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

//"Inside this function, this is Window : {...}"
helloThis();

// 20
child.ageTenYears();
// 5750
investor.investment.investmentGrowth();
