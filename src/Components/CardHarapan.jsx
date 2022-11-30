import React from "react";

function CardHarapan({ avatar, name, harapan, id }) {
  return (
    <div className="container-card">
      <div className="card" style={{ width: "14rem", height: "19rem" }}>
        <div className="card-body">
          <img src={avatar} alt="" className="card-img" />
          <div className="people-title">
            <h5 className="nama">{name}</h5>
            <p className="harapan">{harapan}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHarapan;
