const eachYearInterestInstallment = (
  remainingLoanAmount: number,
  interestRate: number
) => {
  const interest = (remainingLoanAmount * interestRate) / 12 / 100;

  return interest;
};

const eachYearPrincipalInstallment = (
  remainingLoanAmount: number,
  tilgung: number
) => {
  const principal = (remainingLoanAmount * tilgung) / 12 / 100;

  return principal;
};

export const loanCalculator = (
  interestRate,
  tilgung,
  loanAmount,
  installmentCount,
  yearlyExtraPayment
) => {
  const totalYears = Math.floor(installmentCount / 12);
  const data: { principal: number; interest: number }[] = [];

  for (let i = 0; i < totalYears; i++) {
    const paidPrincipal = data
      .map((d) => d.principal)
      .reduce((a, b) => a + b, 0);

    const remainingLoanAmount = loanAmount - paidPrincipal - yearlyExtraPayment;

    const interest = eachYearInterestInstallment(
      remainingLoanAmount,
      interestRate
    );
    const principal = eachYearPrincipalInstallment(
      remainingLoanAmount,
      tilgung
    );

    const remainingInstallments = installmentCount - data.length;
    const currentYearInstallments =
      remainingInstallments > 12 ? 12 : remainingInstallments;

    for (let j = 0; j < currentYearInstallments; j++) {
      data.push({ interest, principal });
    }
  }

  return data;
};
