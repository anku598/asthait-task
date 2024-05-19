import Image from "next/image";
import Link from "next/link";
import discord from "/public/assets/img/discord.svg";
import facebook from "/public/assets/img/facebook.svg";
import linkedin from "/public/assets/img/linkedin.svg";
import twitter from "/public/assets/img/twitter.svg";

export const Footer = () => {
  return (
    <div className="bg-primary text-white min-h-[50vh] relative grid-section-cotainer w-full flex flex-col justify-between gap-10 p-10 md:px-40 md:py-14">
      <div className="footer-top w-full gap-5 flex flex-col md:flex-row justify-between items-center">
        <div className=" font-clash-display-semibold text-[26px] leading-[32px] md:text-[48px] md:leading-[56px] md:max-w-[50%] md:text-left text-center">
          Join the Global Community for the Traders ✌️
        </div>

        <button className="flex items-center py-3 px-7  text-[18px] leading-[24px] bg-btnColor text-white font-jakarta rounded-[10px] shadow-md  hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
          Join Discord
          <Image className="ml-2" src={discord} alt="discord icon" />
        </button>
      </div>

      <div className="seperator"></div>

      <div className="footer-menu-section w-full gap-10 lg:gap-5 flex flex-wrap lg:flex-row justify-between">
        <div className="about-text lg:flex-1 flex-4 font-jakarta font-normal leading-[24px] lg:w-auto w-full">
          <p>
            Empowering global traders with unrivalled financial support.
            Navigate markets confidently with our innovative funding models and
            expert guidance.
          </p>
          <div className="social-media-link flex gap-4 mt-6 lg:items-center">
            <a href="#">
              <Image src={twitter} alt="Twitter Icon" />
            </a>
            <a href="#">
              <Image src={linkedin} alt="Twitter Icon" />
            </a>
            <a href="#">
              <Image src={facebook} alt="Twitter Icon" />
            </a>
            <a href="#">
              <Image src={discord} alt="Disciod Icon" />
            </a>
          </div>
        </div>

        <div className="menu-container lg:flex-1 flex-2 flex flex-col lg:items-center">
          <h3 className="mb-3 font-jakarta font-bold">Important Link</h3>
          <ul className="flex flex-col gap-2 font-jakarta text-[16px] lg:pl-[12px]">
            <Link href={"/"}>Overview</Link>
            <Link href={"/"}>Affiliate Partner</Link>
            <Link href={"/"}>Payment Partner</Link>
            <Link href={"/"}>Sucess Stories</Link>
          </ul>
        </div>

        <div className="menu-container lg:flex-1 flex-2 flex flex-col lg:items-center">
          <h3 className="mb-3 font-jakarta font-bold">Important Link</h3>
          <ul className="flex flex-col gap-2 font-jakarta text-[16px] lg:pl-[12px]">
            <Link href={"/"}>Overview</Link>
            <Link href={"/"}>Affiliate Partner</Link>
            <Link href={"/"}>Payment Partner</Link>
            <Link href={"/"}>Sucess Stories</Link>
          </ul>
        </div>

        <div className="menu-container flex-1 flex flex-col lg:items-center">
          <h3 className="mb-3 font-jakarta font-bold">Important Link</h3>
          <ul className="flex flex-col gap-2 font-jakarta text-[16px] lg:pl-[12px]">
            <Link href={"/"}>Overview</Link>
            <Link href={"/"}>Affiliate Partner</Link>
            <Link href={"/"}>Payment Partner</Link>
            <Link href={"/"}>Sucess Stories</Link>
          </ul>
        </div>
      </div>

      <div className="seperator"></div>

      <div className="footer-bottom flex md:flex-row flex-col gap-3 md:gap-0 justify-between items-center w-full">
        <div>
          <p className="text-center font-jakarta text-[16px]">
            © 2023. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4 justify-between items-center text-[12px] md:text-[16px]">
          <a href="#">Cookie Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};
