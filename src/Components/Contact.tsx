
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume, FaFax } from "react-icons/fa";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import Footer from './Footer';

const Contact: React.FC = () => {
  return (
  <div className="bg-[#111] bg-opacity-80 backdrop-blur-sm px-6 py-4 max-w-7xl mx-auto min-h-screen flex flex-col justify-between" id="contact">

      <h1 className="text-center text-orange-500 m-3 font-bold text-4xl mb-10 mt-10">
        WE'D <span className="text-white m-3 underline">LOVE TO HEAR</span> FROM YOU!
      </h1>

    
      <div className="flex flex-col md:flex-row justify-between gap-10 p-6 rounded-xl shadow-md">
        
      
        <div className="md:w-1/2">
          <h3 className="text-2xl text-orange-500 font-bold mb-2">Get in touch</h3>
          <p className="mb-6 text-[rgb(178,165,165)]">We're here for you every step of the way...</p>
          <ul className="space-y-4 mb-24">
            <li className="flex items-center gap-4">
              <TfiEmail className="text-xl text-orange-500" />
              <div>
                <p className="font-medium text-orange-500">Mail</p>
                <p className="text-sm text-[rgb(178,165,165)]">cantact@cada-fresc0.co.uk</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneVolume className="text-xl text-orange-500" />
              <div>
                <p className="font-medium text-orange-500">Phone</p>
                <p className="text-sm text-[rgb(178,165,165)]">01246204196</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <FaFax className="text-xl text-orange-500" />
              <div>
                <p className="font-medium text-orange-500">Fax</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <PiBuildingOfficeDuotone className="text-xl text-orange-500" />
              <div>
                <p className="font-medium text-orange-500">Office</p>
                <p className="text-sm text-[rgb(178,165,165)]">31 Market Pl, Bolsover, Chesterfield S44 6PN, UK</p>
              </div>
            </li>
          </ul>
        </div>

      
        <div className="md:w-1/2 text-orange-500 mb-24">
          <h1 className="text-xl font-semibold mb-4">Opening Hours</h1>
          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-[#1a1a1a] rounded-lg px-4 py-2">
              <p className="font-medium text-orange-500">Mon-Thu</p>
              <p className="text-sm text-[rgb(178,165,165)]">14:00-22:00</p>
            </li>
            <li className="flex justify-between items-center bg-[#1a1a1a] rounded-lg px-4 py-2">
              <p className="font-medium text-orange-500">Fri-Sat</p>
              <p className="text-sm text-[rgb(178,165,165)]">14:00-23:00</p>
            </li>
            <li className="flex justify-between items-center bg-[#1a1a1a] rounded-lg px-4 py-2">
              <p className="font-medium text-orange-500">Sunday</p>
              <p className="text-sm text-[rgb(178,165,165)]">14:00-21:30</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;