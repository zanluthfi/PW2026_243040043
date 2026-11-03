// src/ShowcasePortofolio.jsx
import React from "react";
import KartuProyek from "./KartuProyek";

const daftarProyek = [
  {
    id: 1,
    judul: "Project 1",
    deskripsi: "Deskripsi untuk Project 1.",
    tagar: ["tag1", "tag2", "tag3"],
    repoUrl: "https://github.com",
  },
  {
    id: 2,
    judul: "Project 2",
    deskripsi: "Deskripsi untuk Project 2.",
    tagar: ["tag1", "tag2", "tag3"],
    repoUrl: "https://github.com",
  },
  {
    id: 3,
    judul: "Project 3",
    deskripsi: "Deskripsi untuk Project 3.",
    tagar: ["tag1", "tag2", "tag3"],
    repoUrl: "https://github.com",
  },
  {
    id: 4,
    judul: "Project 4",
    deskripsi: "Deskripsi untuk Project 4.",
    tagar: ["tag1", "tag2", "tag3"],
    repoUrl: "https://github.com",
  },
];

function ShowcasePortofolio() {
  return (
    <section>
      <h2
        style={{
          color: "#2C3E50",
          borderBottom: "2px solid #E1E4E8",
          paddingBottom: "8px",
        }}
      >
        Showcase Portofolio Mini
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}
      >
        {daftarProyek.map((proyek) => (
          <KartuProyek key={proyek.id} {...proyek} />
        ))}
      </div>
    </section>
  );
}

export default ShowcasePortofolio;
