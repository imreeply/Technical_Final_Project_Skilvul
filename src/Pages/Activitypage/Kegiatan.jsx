import React from 'react'
import './Kegiatan.css'

const Kegiatan = () => {
  return (
    <>
    <div className="TitlePage d-flex justify-content-center">
        <h3>Daftar Kegiatan</h3>
      </div>
      <div className="cardContainer d-flex justify-content-center">
        <div className='card' style={{ width: "70rem", borderRadius: "50px", backgroundColor: "#014751" }}>
          <div className='card-body'>
            <div className="row cardContent d-flex justify-content-between">
              <div className="col-sm">
                <img id="imgKegiatan" src="https://i.ibb.co/6rf0qGd/Images-Kegiatan.png" alt="imgKegiatan" />
              </div>
              <div className="col-sm leftContent text-end">
                <h4 className="">Judul Kegiatan</h4>
                <div className="buttonKegiatan">
                  <button className="buttonCard">Lihat Kegiatan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kegiatan