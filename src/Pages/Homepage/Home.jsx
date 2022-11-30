import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Card Document */}
      <div className="container keterangan" fluid="md">
        <h3 className="title">Kenalan Dengan Kami</h3>
        <div className="row">
          <div className="col">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner img-fluid rounded-4 mb-4">
                <div className="carousel-item active">
                  <img src="https://cdn.pixabay.com/photo/2014/04/17/23/26/environmental-protection-326923_960_720.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_960_720.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="desc mt-4">
              <h4>
                <a style={{ color: "#31878C" }}>MyNature</a> adalah sebuah wadah untuk masyarakat agar dapat membuat sebuah komunitas dalam melakukan kegiatan positif terhadap lingkungan.
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Card Document */}

      {/* Card Motivation */}
      <div className="motivationCard d-flex justify-content-center">
        <div className=" card" style={{ width: "70rem", borderRadius: "50px", backgroundColor: "#31878C" }}>
          <div className="card-body">
            <div className="motivation d-flex justify-content-between">
              <div>
                <h3>
                  <p>Dokumentasikan kegiatanmu</p>
                  <p>Agar bisa memotivasi orang lain!</p>
                </h3>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669702150/MyNature/Sunny_day_smmbc2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card Motivation */}

      {/* Aspirasi */}
      <div className="container-harapan">
        <h2>Apa Harapan Mereka ?</h2>
        <div className="container-card">
          <div className="card" style={{ width: "14rem" }}>
            <div className="card-body">
              <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/sheha_w541d2.svg" alt="" className="card-img" />
              <div className="people-title">
                <h5 className="nama">Donita</h5>
                <p className="harapan">“ Semoga banyak generasi muda yang makin sadar pentingnya menjaga lingkungan dan ikut aktif dalam melakukan perubahannya ”</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "14rem" }}>
            <div className="card-body">
              <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/reza_jnvba2.svg" alt="" className="card-img" />
              <div className="people-title">
                <h5 className="nama">Reza</h5>
                <p className="harapan">“ Indonesia harus kembali hijau lagi seperti dulu dan terus menjadi paru paru dunia demi keberlangsungan hidup kita semua ”</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "14rem" }}>
            <div className="card-body">
              <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/tegar_olhhfz.svg" alt="" className="card-img" />
              <div className="people-title">
                <h5 className="nama">Tegar</h5>
                <p className="harapan">“ Masyarakat harus banyak mengetahui informasi tentang isu lingkungan yang sedang terjadi saat ini agar mereka bisa ikut kontribusi menanggulangi masalah tersebut ”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Aspirasi */}
    </>
  );
};

export default Home;
