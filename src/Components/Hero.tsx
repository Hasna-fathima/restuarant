import { motion } from 'framer-motion';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';
import food5 from '../assets/food5.jpg';
import food6 from '../assets/food6.jpg';
import food7 from '../assets/food7.jpg';
import './style.css';

const foodImages = [food1, food2, food3, food4, food5, food6, food7];

const Hero = () => {
  return (
    <section className="bg-[#111] bg-opacity-80 backdrop-blur-sm px-4 py-8 max-w-7xl mx-auto min-h-screen " id="/">
      <div className="flex flex-col items-center justify-between gap-y-8 md:gap-y-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Traditional <span className="text-orange-500 underline">Italian Cuisine</span> Derbyshire
          </h1>
          <p className="text-[rgb(178,165,165)] text-lg md:text-xl leading-relaxed">
            Enjoy the taste of true Italian cuisine at our restaurant in Derbyshire. <br />
            Book a table at Casa Fresco and sample delicious dishes from an authentic Italian restaurant.
          </p>
          <p className='text-bold text-sm text-orange-500' >Enjoy Half Pizza and psta Sunday to Tuesday from 14:00 to 22:00</p>
          <button className="px-6 py-3 rounded-md text-white bg-orange-500 hover:bg-orange-400 transition-colors duration-300 mt-4">
            Try Now
          </button>
        </div>

        <div className="w-full overflow-x-auto scrollbar-hide px-2">
          <div className="flex gap-4 justify-start md:justify-center">
            {foodImages.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt="food"
                className={`min-w-[180px] sm:min-w-[200px] md:w-52 h-52 object-cover rounded-xl shadow-lg cursor-pointer flex-shrink-0 ${
                  index === 3 ? 'scale-110 z-10' : ''
                }`}
                whileHover={{
                  scale: 1.5,
                  zIndex: 10,
                  rotate: 2,
                  transition: { type: 'spring', stiffness: 300 },
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
