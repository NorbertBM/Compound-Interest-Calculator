const compoundInterestCalculator = document.getElementById(
  "CompoundInterestCalculator"
);
const initialBalance = document.getElementById("InitialBalance");
const interestRate = document.getElementById("InterestRate");
const years = document.getElementById("Years");
const monthlyContribution = document.getElementById("MonthlyContribution");

const result = document.getElementById("Result");

compoundInterestCalculator.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    (initialBalance.value === "", interestRate.value === "", years.value === "")
  ) {
    alert("Complete all fields");
  } else {
    calculateCompoundInterest();
  }
});

function calculateCompoundInterest() {
  result.classList.add("fade");
  setTimeout(() => {
    result.classList.remove("fade");
  }, 1000);
  if (monthlyContribution.value === "") {
    return (result.innerHTML =
      compoundInterest(initialBalance.value, interestRate.value, years.value) +
      "$");
  } else {
    return (result.innerHTML =
      compoundInterestWithContribution(
        initialBalance.value,
        interestRate.value,
        years.value,
        monthlyContribution.value
      ) + "$");
  }
}


function compoundInterest(principleAmount, interestRate, years) {
  console.log("simple compounding");
  console.log(Math.pow(1 + interestRate / 100 / 12, 12 * years).toFixed(2));
  return (
    principleAmount * Math.pow(1 + interestRate / 100 / 12, 12 * years)
  ).toFixed(2);
}


function compoundInterestWithContribution(
  principleAmount,
  interestRate,
  years,
  monthlyContribution
) {
  console.log("compounding with contribution");

  return (
    principleAmount * Math.pow(1 + interestRate / 100 / 12, 12 * years) +
    monthlyContribution *
      ((Math.pow(1 + interestRate / 100 / 12, 12 * years) - 1) /
        (interestRate / 100 / 12))
  ).toFixed(2);
}


