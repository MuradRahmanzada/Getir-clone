import React, { useEffect, useState } from "react";
import Banners from "../api/banners.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {useWindowWidth} from '@react-hook/window-size';


const NextButton = ({ onClick, className }) => {
  const windowWidth = useWindowWidth()
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
};
const PrevButton = ({ onClick, className }) => {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
};

const Campaigns = () => {
  const [banners, setbanners] = useState([]);

  useEffect(() => {
    setbanners(Banners);
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:pt-8">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>
      <Slider className="md:-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id} className="px-2">
              <img src={banner.image} className="w-full md:rounded-lg" />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
