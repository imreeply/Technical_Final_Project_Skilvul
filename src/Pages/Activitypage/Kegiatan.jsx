import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Kegiatan.css";

const Kegiatan = () => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    (async () => {
      await getActivity();
    })();
  }, []);

  const getActivity = async () => {
    const response = await axios.get("https://febe12be-production.up.railway.app/Allkegiatan");
    setActivity(response?.data.data || []);
  };

  return (
    <>
      <div className="bgActivity">
        <div className="TitlePage d-flex justify-content-center">
          <h3>Daftar Kegiatan</h3>
        </div>
        {activity?.map((item) => (
          <div className="cardContainer d-flex justify-content-center" key={item._id}>
            <div className="card" style={{ width: "70rem", borderRadius: "40px", backgroundColor: "#31878C" }}>
              <div className="card-body">
                <div className="row cardContent d-flex justify-content-between">
                  <div className="col-sm">
                    <img id="imgKegiatan" src={item.img_kegiatan} alt="imgKegiatan" />
                  </div>
                  <div className="col-sm leftContent text-end">
                    <h4 className="">{item.judul_kegiatan}</h4>
                    <div className="buttonKegiatan">
                      <button className="buttonCard">Lihat Kegiatan</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Kegiatan;
