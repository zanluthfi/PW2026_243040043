// // src/Penghitung.jsx (VERSI KELIRU - untuk eksperimen)
// import Kartu from "./Kartu";
// function Penghitung() {
//   let jumlah = 0; // variabel biasa
//   const tambah = () => {
//     jumlah = jumlah + 1;
//     console.log("Nilai jumlah sekarang:", jumlah);
//   };
//   return (
//     <Kartu judul="Penghitung Klik">
//       <p>Tombol sudah diklik {jumlah} kali</p>
//       <button className="tombol" onClick={tambah}>
//         Klik Saya
//       </button>
//     </Kartu>
//   );
// }
// export default Penghitung;

// src/Penghitung.jsx (VERSI BENAR)
import { useState } from "react";
import Kartu from "./Kartu";
function Penghitung() {
  // jumlah = nilai saat ini, setJumlah = fungsi untuk mengubahnya, 0 = nilai awal
  const [jumlah, setJumlah] = useState(0);
  const tambah = () => {
    setJumlah(jumlah + 1);
  };
  const ulangi = () => {
    setJumlah(0);
  };
  return (
    <Kartu judul="Penghitung Klik">
      <p>Tombol sudah diklik {jumlah} kali</p>
      {/* Conditional rendering: pesan ini hanya muncul jika jumlah >= 5 */}
      {jumlah >= 5 && <p>Wah, kamu rajin sekali mengklik!</p>}
      <div className="baris">
        <button className="tombol" onClick={tambah}>
          Klik Saya
        </button>
        <button className="tombol tombol-merah" onClick={ulangi}>
          Ulangi
        </button>
      </div>
    </Kartu>
  );
}
export default Penghitung;
