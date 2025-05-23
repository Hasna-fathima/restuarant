import React from 'react';
import about2 from '../assets/about2.jpg';
import mission from '../assets/about3.jpg';
import { PiBowlFoodBold } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { CgSupport } from 'react-icons/cg';
import { CiShoppingBasket } from 'react-icons/ci';
import fries from '../assets/fries.jpg'
const AboutUs: React.FC = () => {
  return (
  

    <div className="bg-[#111] bg-opacity-80 backdrop-blur-sm px-4 py-8 max-w-7xl mx-auto ">
      <div className="max-w-6xl mx-auto space-y-16 mt-16">
        <div className="text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[rgb(178,165,165)] leading-snug mb-10">
         <span className="text-orange-500 underline">Welcome to Casa fresco </span>-Your Italian Escape
          </h3>
          <img
            src={fries}
            alt="About FurniFlex"
            className="mx-auto w-full max-h-[350px] object-cover rounded-lg shadow-md"
          />
    
        </div>

    
        <div className="space-y-4 mb-">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-500">Treat Youreself to a Taste of Italy</h3>
          <p className="text-[rgb(178,165,165)] leading-relaxed ">Treat Yourself to a Taste of Italy At Casa Fresco, every dish is a celebration of authentic Italian flavors. From the first bite of our handcrafted pasta to the crisp, smoky aroma of our wood-fired pizzas, we bring the warmth and richness of Italy straight to your table. Our chefs use only the freshest ingredients to create timeless recipes that delight the senses. Whether you're here for a casual meal or a special occasion, immerse yourself in an unforgettable dining experience where tradition, taste, and hospitality come together beautifully.
          </p>
        </div>

    
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <img
            src={about2}
            alt="Our restuarent"
            className="w-full max-h-[300px] object-cover rounded-md shadow"
          />
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Where Tradidion Meets Taste</h3>
            <p className="text-[rgb(178,165,165)] leading-relaxed">
              At Casa Fresco, we offer an authentic dining experience that takes you to the heart of Italy. Featuring a spectrum of traditional Italian dishes crafted using the freshest ingredients to excite your palate.
              From classic pasta to wood-fired pizzas and indulgent desserts, our chefs are committed to creating a truly magnificent menu. We pride ourselves on our exceptional service and a welcoming artmosphere where you can enjoy Italian cuisine made with love
            </p>
          </div>
        </div>

    
        <div className="grid md:grid-cols-2 gap-8 items-center">
                   <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Apremium Dinig Destination in the Heart of Derbysheri</h3>
            <p className="text-[rgb(178,165,165)] leading-relaxed">
              Nestled in the heart of Derbyshire, Casa Fresco is renowned as one of the region's premier dining destinations. We extend a warm invitation to indulge in an unforgettable experience at Casa Fresco.

From the moment you step through our doors, you'll be enveloped in an atmosphere of conviviality and charm, setting the stage for an exceptional dining journey.
            </p>
          </div>

         
          <img
            src={mission}
            alt="Our Mission"
            className="w-full max-h-[300px] object-cover rounded-md shadow"
          />
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center mb-24">
          <div className="space-y-2">
            <PiBowlFoodBold className="text-4xl text-orange-500 mx-auto" />
            <p className="text-sm font-medium text-[rgb(178,165,165)]">
              Freshly prepared<br /> Dishes
            </p>
          </div>
          <div className="space-y-2">
            <CiShoppingBasket className="text-4xl text-orange-500 mx-auto" />
            <p className="text-sm font-medium text-[rgb(178,165,165)] ">Easy to Shop</p>
          </div>
          <div className="space-y-2">
            <CgSupport className="text-4xl text-orange-500 mx-auto" />
            <p className="text-sm font-medium text-[rgb(178,165,165)] ">24/7 Support</p>
          </div>
          <div className="space-y-2">
            <IoFastFoodOutline className="text-4xl text-orange-500 mx-auto" />
            <p className="text-sm font-medium text-[rgb(178,165,165)] ">
              Authentic Italian<br /> ingredients
            </p>
          </div>
        </div>

      </div>
  
    </div>
    
  );
};

export default AboutUs;
