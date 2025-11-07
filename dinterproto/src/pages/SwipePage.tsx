import { useState } from "react";
import Slider from "react-slick";
import { FaSpotify, FaTiktok, FaHeart, FaTimes } from "react-icons/fa";
import { MOCK_PROFILES } from "../data/mockData";


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: "slick-dots custom-dots",
};

const SwipePage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const profile = MOCK_PROFILES[currentProfileIndex];

  const handleNext = () => {
    setCurrentProfileIndex((prev) => (prev + 1) % MOCK_PROFILES.length);
  };

  if (!profile) return <div className="pt-24 text-center">No more profiles!</div>;

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 pt-28 pb-8">
      <div className="relative h-[650px] w-full max-w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl pb-6">
        <div className="h-[75%] w-full bg-gray-200">
          <Slider {...sliderSettings} className="h-full">
            {profile.images.map((img, idx) => (
              <div key={idx} className="h-full outline-none">
                <img
                  src={img}
                  alt={`${profile.name} ${idx}`}
                  className="h-[480px] w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex h-[25%] flex-col justify-between p-4">
          <div>
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl font-bold text-gray-900">{profile.name},</h2>
              <span className="text-xl text-gray-700">{profile.age}</span>
            </div>
            <p className="text-sm text-gray-500 flex items-center gap-1">
               📍 {profile.location}
            </p>
            <p className="mt-2 line-clamp-2 text-sm text-gray-600">{profile.bio}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
             <div className="flex gap-3">
                <button className="rounded-full bg-green-100 p-2 text-green-600 hover:bg-green-200">
                  <FaSpotify size={20} />
                </button>
                <button className="rounded-full bg-black/10 p-2 text-black hover:bg-black/20">
                  <FaTiktok size={20} />
                </button>
             </div>
             <div className="flex gap-4">
               <button onClick={handleNext} className="rounded-full border-2 border-red-500 p-3 text-red-500 hover:bg-red-50 transition-colors">
                 <FaTimes size={24} />
               </button>
               <button onClick={handleNext} className="rounded-full border-2 border-green-500 p-3 text-green-500 hover:bg-green-50 transition-colors">
                 <FaHeart size={24} />
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipePage;