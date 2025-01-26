import React from "react";

export default function ShowAmount({ amount, backgroundColor = "#fff" }) {
  return (
    <div
      style={{
        padding: "5px",
        borderBottom: "1px solid #eee",
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)}{" "}
      €
    </div>
  );
}
