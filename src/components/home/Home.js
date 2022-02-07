import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import home from "../../images/home.svg";
import { HomeDiv } from "../../styles";

const Home = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <HomeDiv>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>We’re here to help</h1>
                  <h3 className="my-3">
                    Find a local Apple Authorized Service Provider or make a
                    reservation at Apple.
                  </h3>
                  <div className="mt-3">
                    <NavLink
                      to={"/stores"}
                      className="btn-get-started "
                    ></NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={home}
                    className="img-fluid animated"
                    alt="Home Img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeDiv>
  );
};

export default Home;
