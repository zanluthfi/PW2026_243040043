// src/BadgeSkill.jsx
import React from "react";

const warnaLevel = {
  Pemula: { bg: "#D1ECF1", teks: "#0C5460" },
  Menengah: { bg: "#FFF3CD", teks: "#856404" },
  Mahir: { bg: "#D4EDDA", teks: "#155724" },
};

function BadgeSkill({ namaSkill, level }) {
  const warna = warnaLevel[level] || { bg: "#E1E4E8", teks: "#444" };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 14px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "bold",
        backgroundColor: warna.bg,
        color: warna.teks,
      }}
    >
      {namaSkill} · {level}
    </span>
  );
}

export default BadgeSkill;
