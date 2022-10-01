import React from "react";
import pic from "../../assests/images/user.jpg";
import LeftNav from "./LeftNav";
function AdminHome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-lg-2 col-md-4 col-sm-6 col-12">
          <LeftNav />
        </div>
        <div className="col-lg-10 col-md-8 col-sm-6 col-12">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src={pic} height="500px" width="100%" alt="" />
            </div>
            <div className="col-md-6 col-12">
              <h5 className="background text-light mt-2">Admin Home Page</h5>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>Swati Semwal</td>
                  </tr>
                  <tr>
                    <th>User Name</th>
                    <td>admin</td>
                  </tr>
                  <tr>
                    <th>Role</th>
                    <td>Admin</td>
                  </tr>
                  <tr>
                    <th>Email ID</th>
                    <td>admin@ecom.com</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>9584642147</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
