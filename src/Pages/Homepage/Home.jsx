import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>

                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="container my-5" >
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 rounded-5 border shadow-md" id='jaga-lingkungan'>
                    <div className="col-lg-7 p-3 p-lg-5 pt-md-3">
                        <h1 className="display-4 fw-bold lh-1">Jaga Lingkungan Lebih asik dilakukan bersama</h1>
                    </div>
                    <div className="col-lg-4 offset-md-1 p-1 shadow-md">
                        <img className="rounded-lg-1" src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669134055/MyNature/Sunny_day_t0t4ca.svg" alt="" width="400" />
                    </div>
                </div>
            </div>
            
            <div className="container-harapan">
      <h2>Apa Harapan Mereka ?</h2>
      <div className="container-card">
        <div className="card" style={{width: "14rem"}}>
          <div className="card-body">
            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/sheha_w541d2.svg" alt=""
              className="card-img" />
            <div className="people-title">
              <h5 className="nama">Donita</h5>
              <p className="harapan">“ Semoga banyak generasi muda yang makin sadar pentingnya menjaga lingkungan dan ikut
                aktif dalam melakukan perubahannya ”</p>
            </div>
          </div>
        </div>

        <div className="card" style={{width: "14rem"}}>
          <div className="card-body">
            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/reza_jnvba2.svg" alt=""
              className="card-img" />
            <div className="people-title">
              <h5 className="nama">Reza</h5>
              <p className="harapan">“ Indonesia harus kembali hijau lagi seperti dulu dan terus menjadi paru paru dunia demi
                keberlangsungan hidup kita semua ”</p>
            </div>
          </div>
        </div>

        <div className="card" style={{width: "14rem"}}>
          <div className="card-body">
            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/tegar_olhhfz.svg" alt=""
              className="card-img" />
            <div className="people-title">
              <h5 className="nama">Tegar</h5>
              <p className="harapan">“ Masyarakat harus banyak mengetahui informasi tentang isu lingkungan yang sedang terjadi
                saat ini agar mereka bisa ikut kontribusi menanggulangi masalah tersebut ”</p>
            </div>
          </div>
        </div>

      </div>
    </div>
            
        </>
    )
}

export default Home