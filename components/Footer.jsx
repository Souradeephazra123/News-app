import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
// Footer component displays the footer of the webpage
const Footer = () => {
  return (
    // Footer container
    <div className="w-[100%] h-full bg-black text-white py-10">
      {/* Social media icons and links */}
      <div className="w-[100%] flex gap-1">
        {/* Social media icons */}
        <div className="w-[45%] flex gap-3">
          <FaFacebookF color="white" size={30} />
          <FaInstagram color="white" size={30} />
          <FaLinkedinIn color="white" size={30} />
          <FaYoutube color="white" size={30} />
        </div>
        {/* Footer links */}
        <div className="w-[55%] flex gap-5">
          <div className="flex flex-col gap-3">
            <div>About</div>
            <div>Submit a story</div>
            <div>Contact</div>
          </div>
          <div className="flex flex-col gap-3">
            <div>Become a contributor</div>
            <div>Terms of use</div>
            <div>Privacy Policy</div>
          </div>
          <div className="flex flex-col gap-3">
            <div>Cookie Policy</div>
            <div>Sign in</div>
            <div>Create account</div>
          </div>
        </div>
      </div>
      {/* Copyright and app store links */}
      <div className="flex justify-between py-5">
        {/* Copyright */}
        <div>
          <div>Your Newspaper</div>
          <div>©2016-2030 Souradeep Agency (Pty) Ltd.</div>
        </div>
        {/* App store links */}
        <div className="flex gap-5">
          <Image
            src="/apple-store.png"
            width={100}
            height={40}
            className=" rounded-md"
          />
          <Image
            src="/google-play-store.png"
            width={100}
            height={40}
            className=" rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
