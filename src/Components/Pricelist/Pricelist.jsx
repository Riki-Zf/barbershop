import React from "react";
import "./Pricelist.css";
const Pricelist = ({ children }) => {
  return (
    <>
      <div className="pricelist">
        <div className="jdl-harga">{children}</div>
      </div>

      <div className="harga">
        <div className="price-left">
          <div className="info-list">
            <h3>Gentlemen Grooming 25k</h3>
            <p>
              A complete men’s grooming service. Dimulai dengan membersihkan wajah dengan handuk dingin kemudian potong rambut lalu keramas, selanjutnya membersihkan wajah dengan handuk hangat, mendapatkan pijat kepala, leher dan bahu lalu
              diakhiri dengan pengaplikasian tonic dan pomade untuk styling.
            </p>
          </div>
          <div className="info-list">
            <h3>Gentlemen's Premium Package 120k</h3>
            <p>Solusi perawatan rambut & wajah eksklusif. treatment yang kamu dapatkan: grooming, hair spa, sheet mask & hair loss serum.</p>
          </div>
          <div className="info-list">
            <h3>Korean Perm 350k</h3>
            <p>Membuat rambut kamu menjadi bergelombang (wavy) di bagian depan dan atas rambut. Juga membuat rambut kamu terlihat lebih bervolume</p>
          </div>
        </div>
        <div className="price-right">
          <div className="info-list">
            <h3>Down perm 150k</h3>
            <p>Membuat rambut kamu terlihat lebih rata (tidak jigrak) dibagian samping</p>
          </div>
          <div className="info-list">
            <h3>Beard Shaving 65k</h3>
            <p>Dimulai dengan handuk panas untuk merilekskan kulit wajah dan membuka pori-pori wajah lalu diikuti dengan pemakaian shave gel lalu jenggot mulai dicukur dengan premium razor dan ditutup dengan pemakaian after shave</p>
          </div>
          <div className="info-list">
            <h3>Anti-Dandruff Treatment 100K</h3>
            <p>Ucapkan selamat tinggal pada ketombe dengan Perawatan Anti Ketombe kami yang efektif. </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricelist;
