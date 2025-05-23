import React, { useState } from 'react';
import food1 from '../assets/burger.jpg';
import food2 from '../assets/pizza.jpg';
import food3 from '../assets/salad.jpg';
import food4 from '../assets/sushi.jpg';
import food5 from '../assets/fries.jpg';
import food6 from '../assets/pastha.jpg';
import food7 from '../assets/roll.jpg';
import dish1 from '../assets/card1.jpg';
import dish2 from '../assets/card2.jpg';
import user from '../assets/user.jpg'
import Footer from './Footer';

const foodButtons = [
  { img: food1, label: 'Burger' },
  { img: food2, label: 'Pizza' },
  { img: food3, label: 'Salad' },
  { img: food4, label: 'Sushi' },
  { img: food5, label: 'Fries' },
  { img: food6, label: 'Pasta' },
  { img: food7, label: 'Wrap' },
];

const Menu = () => {
  const [selected, setSelected] = useState<'meat' | 'veg'>('meat');

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-20 py-10 backdrop-blur-lg bg-opacity-80">
    
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden ">
            <img src={user} alt="User" className="w-full h-full object-cover" />
          </div>
          <p className="text-[rgb(178,165,165)] text-lg">Hello, Hasna</p>
        </div>

    
        <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-400">What's Healthy Today?</h1>

        
        <div className="flex gap-2 self-center">
          <button
            onClick={() => setSelected('meat')}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              selected === 'meat' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400'
            }`}
          >
            Meat
          </button>
          <button
            onClick={() => setSelected('veg')}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              selected === 'veg' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400'
            }`}
          >
            Veg
          </button>
        </div>
      </div>

      
      <div className="flex flex-wrap justify-center gap-4 mt-6 mb-6">
        {foodButtons.map((item, index) => (
          <div key={index} className="flex flex-col items-center group">
            <button className="w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500 group-hover:border-orange-500 transition-all duration-300">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
            </button>
            <span className="mt-1 text-sm text-[rgb(178,165,165)]  group-hover:text-orange-500">{item.label}</span>
          </div>
        ))}
      </div>

      
      <div className="border-b border-orange-500 mb-6" />

      
      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a]">
          <img src={dish1} alt="menu card 1" className="w-full h-[400] object-contain" />
         
        </div>

    
        <div className="rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a]">
          <img src={dish2} alt="menu card 2" className="w-full h-[400] object-contain" />
          
        </div>
      </div><Footer/>
    </div>
  );
};

export default Menu;