
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa6";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-black text-[rgb(178,165,165)] backdrop-blur-sm py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h5 className="text-lg font-bold text-white mb-4">Help</h5>
          <ul className="space-y-2 text-sm">
            <li>HelpLine: 01246204196</li>
            <li>Email: contact@casa-fresco.co.uk</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
        >
          <h5 className="text-lg font-bold text-white mb-4">Support</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:text-orange-500 hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/casa_restuarent"
                target="_blank"
                className="flex items-center gap-2 hover:text-orange-500"
              >
                <FaInstagram /> instagram
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:text-orange-500"
              >
                <FaTwitter /> twitter
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:text-orange-500"
              >
                <FaFacebook /> facebook
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{ once: true }}
        >
          <h5 className="text-lg font-bold text-white mb-4">About</h5>
          <p className="text-sm">
            A simple and smooth dining experience tailored to your taste. Visit us to feel the flavor.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;