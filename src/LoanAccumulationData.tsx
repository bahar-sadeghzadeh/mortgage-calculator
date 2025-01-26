import React from "react";
import ShowAmount from "./showAmoount";

export default function LoanAccumulationData({ data }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "10px",
        margin: "20px auto",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      {/* Header Row */}
      <div
        style={{
          fontWeight: "bold",
          borderBottom: "1px solid #ccc",
          padding: "5px",
        }}
      >
        Total Principals
      </div>
      <div
        style={{
          fontWeight: "bold",
          borderBottom: "1px solid #ccc",
          padding: "5px",
        }}
      >
        Total Interests
      </div>
      <div
        style={{
          fontWeight: "bold",
          borderBottom: "1px solid #ccc",
          padding: "5px",
        }}
      >
        Total Installments
      </div>
      <ShowAmount
        amount={data
          .map((d) => d.principal)
          .reduce((a, b) => a + b, 0)
          .toFixed(2)}
      />
      <ShowAmount
        amount={data
          .map((d) => d.interest)
          .reduce((a, b) => a + b, 0)
          .toFixed(2)}
      />
      <ShowAmount
        amount={data
          .map((d) => d.principal + d.interest)
          .reduce((a, b) => a + b, 0)
          .toFixed(2)}
      />
    </div>
  );
}
