import React from "react";
import "./Dashboard.css";
import { RiAddFill } from "react-icons/ri";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

function Dashboard() {
  return (
    <>
      <div className="TitlePage d-flex justify-content-center"></div>
      <div className="activityContainer d-flex justify-content-center">
        <div className="card" style={{ width: "70rem", borderRadius: "20px", backgroundColor: "#ffff" }}>
          <div className="card-body">
            <div className="cardActivity d-flex justify-content-between">
              <div>
                <h4>List Activity</h4>
              </div>
              <div>
                <div>
                  <button className="buttonActivity">
                    Add
                    <RiAddFill size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="tableActivity">
              <table className="table" style={{ borderRadius: "20px" }}>
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Date</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Menanam Pohonasasaasasasasa</td>
                    <td>01/01/2023</td>
                    <td className="text-end">
                      <BiEdit size={24} color="#1B5457" className="actionButton" />
                      <BiTrashAlt size={24} color="#CF2A2A" className="actionButton" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ciptakan Laut Bersih</td>
                    <td>01/01/2023</td>
                    <td className="text-end">
                      <BiEdit size={24} color="#1B5457" className="actionButton" />
                      <BiTrashAlt size={24} color="#CF2A2A" className="actionButton" />
                    </td>
                  </tr>
                  <tr>
                    <td>Bersihkan Sampah</td>
                    <td>01/01/2023</td>
                    <td className="text-end">
                      <BiEdit size={24} color="#1B5457" className="actionButton" />
                      <BiTrashAlt size={24} color="#CF2A2A" className="actionButton" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
