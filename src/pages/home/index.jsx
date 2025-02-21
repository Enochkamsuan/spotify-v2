import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image_1 from "../../assets/images/home-banner1.jpg";
import image_2 from "../../assets/images/home-banner2.jpg";
import Landing from "../../component/landing";

const Index = () => {
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
    <div>
      <Landing />
      <div className="px-6 sm:px-20 md:px-24 lg:px-24 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-12 lg:col-span-3">
            <div className="border border-white w-full relative">
              <Slider {...settings}>
                <div className="offers offers_1 flex flex-col justify-center items-center">
                  <div className="text-white text-xl font-bold">MEGA DEAL</div>
                  <div className="text-white mt-2 text-xs">
                    Save upto <span className="font-bold">70% OFF</span> Fashion
                    collection
                  </div>
                </div>
                <div className=" flex flex-col justify-center items-center offers offers_2">
                  <div className="text-white text-xl font-bold">HOT DEAL</div>
                  <div className="text-white mt-2 text-xs">
                    Save upto <span className="font-bold">70% OFF</span> Fashion
                    collection
                  </div>
                </div>
                <div className="flex-col justify-center items-center offers offers_3">
                  <div className="text-white text-xl font-bold">HUGE SALE</div>
                  <div className="text-white mt-2 text-xs">
                    Save upto <span className="font-bold">70% OFF</span> Fashion
                    collection
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-4">
            <div>
              <img
                src={image_1}
                alt="banner1"
                className="w-full max-h-[184px]"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-5">
            <img src={image_2} alt="banner2" className="w-full max-h-[184px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
