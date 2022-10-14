console.log("test");

// The formula for compound interest, including principal sum, is:
// A = P(1 + r/n)^nt

//   Where:

// A = the future value of the investment/loan, including interest
// P = the principal investment amount (the initial deposit or loan amount)
// r = the annual interest rate (decimal)
// n = the number of times that interest is compounded per unit t
// t = the time the money is invested or borrowed for

//   const A = {
//     P: 5000,
//     r: 0.05,
//     n: 12,
//     t: 10,
//   };

//   const A = {
//     P: principleAmount,
//     r: interestRate / 100,
//     n: 12,
//     t: years,
//     PMT: monthlyContribution,
//   };

// [ ] 2 Formula for regular contributions
//  PMT = the monthly payment

// PMT × {[(1 + r/n)(nt) - 1] / (r/n)}

//   return (
//     <div>
//       ${" "}
//       {A.PMT === null
//         ? (A.P * Math.pow(1 + A.r / A.n, A.n * A.t)).toFixed(2)
//         : (
//             A.P * Math.pow(1 + A.r / A.n, A.n * A.t) +
//             A.PMT * ((Math.pow(1 + A.r / A.n, A.n * A.t) - 1) / (A.r / A.n))
//           ).toFixed(2)}
//     </div>
//   );

// [ ] Get elements by Id from the DOM

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
  if (monthlyContribution.value === "") {
    return (result.innerHTML = compoundInterest(
      initialBalance.value,
      interestRate.value,
      years.value
    ));
  } else {
    return (result.innerHTML = compoundInterestWithContribution(
      initialBalance.value,
      interestRate.value,
      years.value,
      monthlyContribution.value
    ));
  }
}

// The formula for compound interest, including principal sum, is:
// A = P(1 + r/n)^nt

//   Where:

// A = the future value of the investment/loan, including interest
// P = the principal investment amount (the initial deposit or loan amount)
// r = the annual interest rate (decimal)
// n = the number of times that interest is compounded per unit t
// t = the time the money is invested or borrowed for

function compoundInterest(principleAmount, interestRate, years) {
  console.log("simple compounding");
  console.log(Math.pow(1 + interestRate / 100 / 12, 12 * years).toFixed(2));
  return (
    principleAmount * Math.pow(1 + interestRate / 100 / 12, 12 * years)
  ).toFixed(2);
}

// [ ] 2 Formula for regular contributions
//  PMT = the monthly contributions

// PMT × {[(1 + r/n)^(nt) - 1] / (r/n)}

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

function interest() {
  setTimeout(() => {}, 500);
}
