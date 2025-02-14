import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import landingBg from "../assets/images/side-banner-1.jpg";

const Landing = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="px-6 sm:px-20 md:px-24 lg:px-24 py-5">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-12 lg:col-span-3">
          <img src={landingBg} alt="land" className="w-full" />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-9">
          <Slider {...settings}>
            <div className="upper_slide px-10 lg:px-20 py-20 lg:py-32 text-white">
              <div>
                <div className="underline font-semibold">SUPER SALE</div>
                <div className="text-6xl font-bold">FASHION LIFE</div>
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit sequi a dolores distinctio beatae inventore po
                </div>
                <div className="mt-3">
                  <Link to="/details">
                    <button className="bg-blue-400 text-white rounded-md px-5 py-2">
                      BUY NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="upper_slide px-10 lg:px-20 py-20 lg:py-32 text-white">
              <div>
                <div className="underline font-semibold">SUPER SALE</div>
                <div className="text-6xl font-bold">FASHION LIFE</div>
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit sequi a dolores distinctio beatae inventore po
                </div>
                <div className="mt-3">
                  <Link to="/details">
                    <button className="bg-blue-400 text-white rounded-md px-5 py-2">
                      BUY NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="upper_slide px-10 lg:px-20 py-20 lg:py-32 text-white">
              <div>
                <div className="underline font-semibold text-white">
                  SUPER SALE
                </div>
                <div className="text-6xl font-bold">FASHION LIFE</div>
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit sequi a dolores distinctio beatae inventore po
                </div>
                <div className="mt-3">
                  <Link to="/details">
                    <button className="bg-blue-400 text-white rounded-md px-5 py-2">
                      BUY NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Landing;
