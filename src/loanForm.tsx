import React, { useState } from "react";
import { loanCalculator } from "./calculator";
import LoanDataGrid from "./loanDataGrid";

type TFormValues = {
  interestRate: number | "";
  tilgung: number | "";
  loanAmount: number | "";
  installmentCount: number | "";
  yearlyExtraPayment: number | "";
  equalToPrincipal: true;
};

export default function LoanForm() {
  const [formValues, setFormValues] = useState<TFormValues>({
    interestRate: "",
    tilgung: "",
    loanAmount: "",
    installmentCount: "",
    yearlyExtraPayment: "",
    equalToPrincipal: true,
  });
  const [data, setData] = useState<{ principal: number; interest: number }[]>(
    []
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    const {
      interestRate,
      tilgung,
      loanAmount,
      installmentCount,
      yearlyExtraPayment,
      equalToPrincipal,
    } = formValues;
    e.preventDefault();
    setData(
      loanCalculator(
        interestRate,
        tilgung,
        loanAmount,
        installmentCount,
        yearlyExtraPayment,
        equalToPrincipal
      )
    );
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          maxWidth: "400px",
          margin: "50px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Loan Application Form
        </h1>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>
          <div>
            <label
              htmlFor="interestRate"
              style={{
                display: "block",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Interest Rate (%)
            </label>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              value={formValues.interestRate}
              onChange={handleInputChange}
              style={{
                width: "-webkit-fill-available",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              step="0.01"
              required
            />
          </div>
          <div>
            <label
              htmlFor="tilgung"
              style={{
                display: "block",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Tilgung (Repayment %)
            </label>
            <input
              type="number"
              id="tilgung"
              name="tilgung"
              value={formValues.tilgung}
              onChange={handleInputChange}
              style={{
                width: "-webkit-fill-available",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              step="0.01"
              required
            />
          </div>
          <div>
            <label
              htmlFor="loanAmount"
              style={{
                display: "block",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Loan Amount (€)
            </label>
            <input
              type="number"
              id="loanAmount"
              name="loanAmount"
              value={formValues.loanAmount}
              onChange={handleInputChange}
              style={{
                width: "-webkit-fill-available",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              required
            />
          </div>
          <div>
            <label
              htmlFor="installmentCount"
              style={{
                display: "block",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Installment Count
            </label>
            <input
              type="number"
              id="installmentCount"
              name="installmentCount"
              value={formValues.installmentCount}
              onChange={handleInputChange}
              style={{
                width: "-webkit-fill-available",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              required
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontWeight: "500",
                marginBottom: "5px",
              }}
            >
              Yearly Extra Payment
            </label>
            <div>
              <label style={{ marginRight: "10px" }}>
                <input
                  type="checkbox"
                  name="equalToPrincipal"
                  checked={formValues.equalToPrincipal}
                  onChange={handleInputChange}
                />
                Equal to each year principal amount
              </label>
            </div>
            {!formValues.equalToPrincipal && (
              <div style={{ marginTop: "10px" }}>
                <label
                  htmlFor="yearlyExtraPayment"
                  style={{
                    display: "block",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  Custom Value (€)
                </label>
                <input
                  type="number"
                  id="yearlyExtraPayment"
                  name="yearlyExtraPayment"
                  value={formValues.yearlyExtraPayment}
                  onChange={handleInputChange}
                  style={{
                    width: "-webkit-fill-available",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                  step="0.01"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            // disabled={!isFormValid()}
          >
            Submit
          </button>
        </form>
      </div>
      {data.length > 0 && <LoanDataGrid data={data} />}
    </>
  );
}
