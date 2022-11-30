import React from "react";
import "./AddActivity.css";

function AddActivity() {
  return (
    <div className="bgFormAdd">
      <div className="containerCard d-flex justify-content-center">
        <div className="card" style={{ width: "40rem", borderRadius: "20px", backgroundColor: "#ffff" }}>
          <div className="titleAct d-flex justify-content-center">
            <div>
              <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669737831/MyNature/Bookmarks_un3edl.svg" alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <h3>Tambah Activity</h3>
          </div>

          <div className="formAdd d-flex justify-content-center">
            <form style={{ width: "30rem" }}>
              <div className="form-group">
                <label>Gambar Kegiatan</label>
                <input type="url" className="form-control" id="imagesAct" placeholder="Masukkan Link Gambar" />
              </div>
              <div className="form-group">
                <label>Judul Kegiatan</label>
                <input type="text" className="form-control" id="judulAct" placeholder="Masukkan Judul Kegiatan" />
              </div>
              <div className="form-group">
                <label>Jadwal Kegiatan</label>
                <input type="date" className="form-control" id="jadwalAct" />
              </div>
              <div className="form-group">
                <label>Lokasi Kegiatan</label>
                <input type="text" className="form-control" id="lokasiAct" placeholder="Masukkan Kota Pelaksaaan" />
              </div>
              <div className="form-group">
                <label>Deksripsi Kegiatan</label>
                <textarea type="text" className="form-control" id="descAct" placeholder="Masukkan Deskripsi Kegiatan" />
              </div>
              <div className="btnAddAct form-group">
                <button type="submit" className="btn btn-addAct">
                  Tambah
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddActivity;
