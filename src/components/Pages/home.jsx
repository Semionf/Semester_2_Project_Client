import React, { useState, useEffect } from "react";
import "./style.css";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [infoType, setInfoType] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const handleModalOpen = (UserType) => {
    setInfoType(UserType);
    setShowModal(true);
  };

  const handleModalReturn = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1 className="headline">Welcome to PromoteIt</h1>
      <div className="HomePage--container">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators"></div>
          <div className="carousel-inner">
            <div
              className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}
              data-bs-interval="10000"
            >
              <img
                src="https://miro.medium.com/max/1200/1*WQlvxGQtWTjXWyVcn7F0Xw.jpeg"
                className="d-block w-100 choice"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="homeText">Non Profit Organization</h5>
                <p className="homeText">
                  As a non-profit organization you can promote social agendas
                  and receive donations from companies and activists.
                </p>
                <label
                  className="btn-info  homeLabel"
                  onClick={() => {
                    handleModalOpen("NPO");
                  }}
                >
                  More Info
                </label>
              </div>
            </div>

            <div
              className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}
              data-bs-interval="2000"
            >
              <img
                src="https://blog.ipleaders.in/wp-content/uploads/2018/03/BV-Acharya.jpg"
                className="d-block w-100 choice"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="homeText">Business Company</h5>
                <p className="homeText">
                  As a business company you can cooperate with selected
                  campaigns and social activists can donate your products to
                  these campaigns.
                </p>
                <label
                  className="btn-info homeLabel"
                  onClick={() => {
                    handleModalOpen("BC");
                  }}
                >
                  More Info
                </label>
              </div>
            </div>
            <div
              className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}
            >
              <img
                src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/05/using-seo-traffic-to-make-the-world-a-better-place.png"
                className="d-block w-100 choice"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="homeText">Social Activist</h5>
                <p className="homeText">
                  As a social activist you will be able to donate products to
                  the campaign you want to promote using money you will earn
                  from promoting the campaign on social networks.
                </p>
                <label
                  className="btn-info  homeLabel"
                  onClick={() => {
                    handleModalOpen("SA");
                  }}
                >
                  More Info
                </label>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="modal-container">
            <div className="modal-content">
              {infoType === "NPO" && (
                <>
                  <h2>Non Profit Organization</h2>
                  <h6>
                    As a business company you can cooperate with selected
                    campaigns and social activists can donate your products to
                    these campaigns.
                  </h6>
                  <br />
                  <p>
                    every time a social activist promote your campaign on social
                    media we will reward him with money!
                  </p>
                  <br />
                  <p>
                    after the social activits earns enough money he can donate
                    to your campaign a product that will be suplied by buisness
                    compenies that accoiate with your campaign.
                  </p>
                </>
              )}
              {infoType === "BC" && (
                <>
                  <h2>Business Company</h2>
                  <h6>
                    As a business company you can cooperate with selected
                    campaigns and social activists can donate your products to
                    these campaigns.
                  </h6>
                  <br />
                  <p>
                    every time a social activists will buy a product from you we
                    will update you in our orders panel for you convince!
                  </p>
                  <br />
                  <p>
                    every time a social activist will donate your products we
                    will promote your products on our social media!
                  </p>
                </>
              )}
              {infoType === "SA" && (
                <>
                  <h2>Social Activist</h2>
                  <h6>
                    As a social activist you will be able to donate products to
                    a campaign you want to promote using money you will earn
                    from promoting the campaign on social networks.
                  </h6>
                  <br />
                  <p>
                    every time you promote the campaign you chosed on social
                    media we will give you 1 dollar!
                  </p>
                  <br />
                  <p>
                    dont forget the hashtags when you post a tweet #PromoteIt
                    #YourCampaign
                  </p>
                </>
              )}
              <div className="modal-btn">
                <button className="btn btn-danger" onClick={handleModalReturn}>
                  Return
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <h5 className="contactUs">
        In order to improve our service we provide a Contact Us section in which
        you can ask questions, suggest ideas or just say hi{" "}
      </h5>
    </>
  );
};
