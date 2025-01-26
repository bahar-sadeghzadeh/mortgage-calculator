const eachYearInterestInstallment = (
  remainingLoanAmount: number,
  interestRate: number
) => {
  const interest = (remainingLoanAmount * interestRate) / 12 / 100;

  return interest;
};

const firstYearPrincipalInstallment = (
  remainingLoanAmount: number,
  tilgung: number
) => {
  const principal = (remainingLoanAmount * tilgung) / 12 / 100;

  return principal;
};

const eachYearPrincipalInstallment = (installmentAmount, interest) => {
  return installmentAmount - interest;
};

const paidPrincipal = (data) => {
  return data.map((d) => d.principal).reduce((a, b) => a + b, 0);
};

export const loanCalculator = (
  interestRate,
  tilgung,
  loanAmount,
  installmentCount,
  yearlyExtraPayment,
  equalToPrincipal
) => {
  const totalYears = Math.ceil(installmentCount / 12);
  const data: { principal: number; interest: number }[] = [];
  var installmentAmount;

  for (let i = 0; i < totalYears; i++) {
    const paidPrincipalAmount = paidPrincipal(data);

    const remainingLoanAmount = loanAmount - paidPrincipalAmount;

    const interest = eachYearInterestInstallment(
      remainingLoanAmount,
      interestRate
    );
    const principal =
      i === 0
        ? firstYearPrincipalInstallment(remainingLoanAmount, tilgung)
        : eachYearPrincipalInstallment(installmentAmount, interest);

    if (i === 0) {
      installmentAmount = principal + interest;
    }

    const remainingInstallments = installmentCount - data.length;
    const currentYearInstallments =
      remainingInstallments > 12 ? 12 : remainingInstallments;

    for (let j = 0; j < currentYearInstallments; j++) {
      if (j + 1 === 12) {
        if (equalToPrincipal) {
          data.push({ interest: interest, principal: principal * 2 });
        } else {
          data.push({
            interest: interest,
            principal: principal + (Number(yearlyExtraPayment) || 0),
          });
        }
      } else {
        data.push({ interest, principal });
      }
    }
  }
  return data;
};
