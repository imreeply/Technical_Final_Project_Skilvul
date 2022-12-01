import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "./Home.css";
import { getHarapan } from "../../Redux/Actions/harapanAction";
import CardHarapan from "../../Components/CardHarapan";

const Home = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const dispatch = useDispatch();
  const { harapan, isLoading } = useSelector((state) => state.harapan);

  useEffect(() => {
    dispatch(getHarapan());
  }, []);
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
              <h4 className="text-end">
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
                  <p>Ayo bersama-sama</p>
                  <p>Menjaga Lingkungan untuk masa depan yang lebih baik!</p>
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
        <div className="row mx-auto">
          <div className="swiper">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                769: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {isLoading ? (
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                harapan.map((items) => {
                  return (
                    <SwiperSlide key={items.id}>
                      <CardHarapan name={items.name} avatar={items.avatar} harapan={items.harapan} id={items.id} />
                    </SwiperSlide>
                  );
                })
              )}
            </Swiper>
          </div>
        </div>
      </div>
      {/* Aspirasi */}
    </>
  );
};

export default Home;
