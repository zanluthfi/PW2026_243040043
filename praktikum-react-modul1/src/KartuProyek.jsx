// src/KartuProyek.jsx
import React from "react";

function KartuProyek({ judul, deskripsi, tagar, repoUrl }) {
  return (
    <div
      style={{
        border: "1px solid #D0D7DE",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        textAlign: "left",
      }}
    >
      <h3 style={{ margin: 0, color: "#1B365D" }}>{judul}</h3>

      <p style={{ margin: 0, fontSize: "14px", color: "#555", flexGrow: 1 }}>
        {deskripsi}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tagar.map((t) => (
          <span
            key={t}
            style={{
              backgroundColor: "#E1E4E8",
              color: "#2C3E50",
              padding: "3px 10px",
              borderRadius: "12px",
              fontSize: "12px",
            }}
          >
            #{t}
          </span>
        ))}
      </div>

      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#1B365D",
          color: "#FFFFFF",
          padding: "10px 16px",
          borderRadius: "6px",
          fontWeight: "bold",
          fontSize: "14px",
          textAlign: "center",
          textDecoration: "none",
        }}
      >
        Lihat di GitHub
      </a>
    </div>
  );
}

export default KartuProyek;
