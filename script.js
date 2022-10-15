// Get all elements from the dom using id

const compoundInterestCalculator = document.getElementById(
  "CompoundInterestCalculator"
);

const initialBalance = document.getElementById("InitialBalance");
const interestRate = document.getElementById("InterestRate");
const year = document.getElementById("Years");
const monthlyContribution = document.getElementById("MonthlyContribution");
const result = document.getElementById("Result");


// Form validation and submission
compoundInterestCalculator.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log(e);
  if (
    initialBalance.value === "" ||
    interestRate.value === "" ||
    year.value === ""
  ) {
    alert("Complete all fields");
  } else {
    // console.log("valid");
    calculateCompoundInterest();
  }
});

// Calculate compound interest

function calculateCompoundInterest() {
  // Add fade effect

  result.classList.add("fade");
  setTimeout(function () {
    result.classList.remove("fade");
  }, 1000);
  if (monthlyContribution.value === "") {
    return (result.innerHTML =
      compoundInterest(initialBalance.value, interestRate.value, year.value) +
      "$");
  } else {
    return (result.innerHTML =
      compoundInterestWithContribution(
        initialBalance.value,
        interestRate.value,
        year.value,
        monthlyContribution.value
      ) + "$");
  }
}



function compoundInterest(principleAmount, interestRate, years) {
  console.log("simple compounding");

  return (
    principleAmount * Math.pow(1 + interestRate / 100 / 12, 12 * years)
  ).toFixed(2);
}

// compound Interest With Contribution




function compoundInterestWithContribution(
  principleAmount,
  interestRate,
  years,
  monthlyContribution
) {
  return (
    principleAmount * Math.pow(1 + interestRate / 100 / 12, 12 * years) +
    (monthlyContribution *
      (Math.pow(1 + interestRate / 100 / 12, 12 * years) - 1)) /
      (interestRate / 100 / 12)
  ).toFixed(2);
}
