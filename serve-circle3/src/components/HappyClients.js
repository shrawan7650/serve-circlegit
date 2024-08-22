import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HappyClients = () => {
  const partners = [
    "https://www.servecircle.com/resources/assets/img/sunshine-solutions.png",
    "https://www.servecircle.com/resources/assets/img/appvision.png",
    "https://www.servecircle.com/resources/assets/img/authentic-services.png",
    "https://www.servecircle.com/resources/assets/img/mPhone.jpg",
    "https://www.servecircle.com/resources/assets/img/nLive.png",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <HappyComponents>
      <div className="content-wrapper">
        <div className="happy-comp">
          <h3>Our Happy Clients</h3>
        </div>
        <Slider {...settings} className="partner-carousel">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img src={partner} alt={partners[index + 1]} />
            </div>
          ))}
        </Slider>
      </div>
    </HappyComponents>
  );
};

const HappyComponents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 80vw;
  margin: auto;
  padding: 20px;

  .content-wrapper {
    text-align: center;
    width: 100%;
  }

  .happy-comp {
    font-family: "Dosis", "Open-Sans", sans-serif;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.2;
    color: #37404d;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 32px;
      margin-bottom: 3rem;
    }
  }

  .partner-carousel {
    .partner-item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;

      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;

export default HappyClients;
