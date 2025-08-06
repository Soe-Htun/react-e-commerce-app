import React from 'react'
import ShoppingLogo from "../../assets/shopping_logo.png";
import Banner from "../../assets/footer-pattern.jpg"

import {
  FaFacebook as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaLinkedin as LinkedInIcon,
  FaLocationArrow as LocationArrowIcon,
  FaMobileAlt as MobileAltIcon,
} from "react-icons/fa";

const FaFacebook = FacebookIcon as React.FC<React.SVGProps<SVGSVGElement>>;
const FaInstagram = InstagramIcon as React.FC<React.SVGProps<SVGSVGElement>>;
const FaLinkedin = LinkedInIcon as React.FC<React.SVGProps<SVGSVGElement>>;
const FaLocationArrow = LocationArrowIcon as React.FC<React.SVGProps<SVGSVGElement>>;
const FaMobileAlt = MobileAltIcon as React.FC<React.SVGProps<SVGSVGElement>>;

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={ShoppingLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, key) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={key}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, key) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={key}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Yangon, Myanmar</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+959 265094170</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer