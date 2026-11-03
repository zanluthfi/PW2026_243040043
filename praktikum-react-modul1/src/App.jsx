// src/App.jsx
import React, { useState } from "react";
import KartuProfil from "./KartuProfil";
import BadgeSkill from "./BadgeSkill";
import ItemMatkul from "./ItemMatkul";
import ShowcasePortofolio from "./ShowcasePortofolio";

function App() {
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF1",
      nama: "Pemrograman Web",
      sks: 3,
      hari: "Selasa",
    },
    {
      id: 102,
      kode: "IF2",
      nama: "Basis Data",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF3",
      nama: "Rekayasa Perangkat Lunak",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF4",
      nama: "Pemrograman Game",
      sks: 2,
      hari: "Jumat",
    },
  ];

  const daftarSkill = [
    { id: 1, namaSkill: "Java", level: "Pemula" },
    { id: 2, namaSkill: "React", level: "Pemula" },
    { id: 3, namaSkill: "Tableau", level: "Menengah" },
    { id: 4, namaSkill: "SQL", level: "Mahir" },
  ];

  const [halaman, setHalaman] = useState("beranda");

  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.",
    );
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ color: "#1B365D", margin: "0 0 8px 0" }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "32px",
        }}
      >
        {["beranda", "showcase"].map((h) => (
          <button
            key={h}
            onClick={() => setHalaman(h)}
            style={{
              padding: "8px 18px",
              border: "1px solid #1B365D",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: halaman === h ? "#1B365D" : "#FFFFFF",
              color: halaman === h ? "#FFFFFF" : "#1B365D",
            }}
          >
            {h === "beranda" ? "Beranda" : "Showcase Portofolio"}
          </button>
        ))}
      </nav>

      {halaman === "showcase" ? (
        <ShowcasePortofolio />
      ) : (
        <>
          <section style={{ marginBottom: "32px" }}>
            <h2
              style={{
                color: "#2C3E50",
                borderBottom: "2px solid #E1E4E8",
                paddingBottom: "8px",
                textAlign: "center",
              }}
            >
              Profil Mahasiswa Praktikan
            </h2>
            <KartuProfil
              nama="Fauzan Muhammad Luthfi"
              npm="243040043"
              kelas="Praktikum pemrograman web"
              status="Aktif"
              fotoUrl="favicon.svg"
            />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              {daftarSkill.map((skill) => (
                <BadgeSkill
                  key={skill.id}
                  namaSkill={skill.namaSkill}
                  level={skill.level}
                />
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2
              style={{
                color: "#2C3E50",
                borderBottom: "2px solid #E1E4E8",
                paddingBottom: "8px",
              }}
            >
              Daftar Rencana Praktikum Semester
            </h2>
            <div style={{ display: "grid", gap: "12px" }}>
              {daftarPraktikum.map((matkul) => (
                <ItemMatkul key={matkul.id} {...matkul} />
              ))}
            </div>
          </section>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              onClick={notifikasiSapaan}
              style={{
                backgroundColor: "#1B365D",
                color: "#FFFFFF",
                padding: "12px 24px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Uji Interaktivitas Event (Klik Disini)
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
