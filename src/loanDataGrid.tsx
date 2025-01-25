import React from "react";
import LoanAccumulationData from "./LoanAccumulationData";

export default function LoanDataGrid({ data }) {
  return (
    <>
      <LoanAccumulationData data={data} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
          Installment Number
        </div>
        <div
          style={{
            fontWeight: "bold",
            borderBottom: "1px solid #ccc",
            padding: "5px",
          }}
        >
          Principal Amount
        </div>
        <div
          style={{
            fontWeight: "bold",
            borderBottom: "1px solid #ccc",
            padding: "5px",
          }}
        >
          Interest
        </div>
        <div
          style={{
            fontWeight: "bold",
            borderBottom: "1px solid #ccc",
            padding: "5px",
          }}
        >
          Total Installment Amount
        </div>

        {/* Data Rows */}
        {data.map((row, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                padding: "5px",
                borderBottom: "1px solid #eee",
                backgroundColor: index % 2 === 1 ? "#f9f9f9" : "#fff",
              }}
            >
              {index + 1}
            </div>
            <div
              style={{
                padding: "5px",
                borderBottom: "1px solid #eee",
                backgroundColor: index % 2 === 1 ? "#f9f9f9" : "#fff",
              }}
            >
              {row.principal.toFixed(2)} €
            </div>
            <div
              style={{
                padding: "5px",
                borderBottom: "1px solid #eee",
                backgroundColor: index % 2 === 1 ? "#f9f9f9" : "#fff",
              }}
            >
              {row.interest.toFixed(2)} €
            </div>
            <div
              style={{
                padding: "5px",
                borderBottom: "1px solid #eee",
                backgroundColor: index % 2 === 1 ? "#f9f9f9" : "#fff",
              }}
            >
              {(row.principal + row.interest).toFixed(2)} €
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
