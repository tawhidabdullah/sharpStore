import React from "react";
import "./DashboardContent.scss";

const DashboardContent = () => {
  return (
    <div>
      <section class="statistics">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="box">
                <i class="fa fa-user fa-fw bg-primary" />
                <div class="info">
                  <h3>1,245</h3> <span>Users</span>
                  <p>all the user are awesome</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <i class="fa fa-file fa-fw bg-danger" />
                <div class="info">
                  <h3>34</h3> <span>Projects</span>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <i class="fa fa-users fa-fw bg-success" />
                <div class="info">
                  <h3>5,245</h3> <span>Products</span>
                  <p>Products should be great </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardContent;
