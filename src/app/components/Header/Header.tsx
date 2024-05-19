import Image from "next/image";
import HeaderImg from "/public/assets/img/header-image.jpg";

export const Header = () => {
  return (
    <>
      <div className=" bg-primary relative w-full min-h-[100vh] lg:h-screen text-white flex flex-col gap-10 lg:gap-20 lg:flex-row items-center justify-center md:justify-between py-10 px-5 md:20 lg:px-40">
        <div className="hidden md:block shadow-bg bg-shadow-gradient absolute right-0 bottom-0 bg-cover w-[60%] h-[65vh]"></div>
        <div className="hidden md:block bg-pattern absolute right-0 bottom-0 bg-cover w-[60%] h-[65vh]"></div>
        <div className="left-column order-2 lg:order-1 lg:max-w-[650px]">
          <div className="heading-title text-center md:text-left font-clash-display-semibold text-[36px] leading-[42px] md:text-3xl md:leading-3xl lg:text-5xl lg:leading-5xl mb-5">
            Empowering Trades with Our Capital 🔥
          </div>
          <div className="sub-heading-text text-center md:text-left mb-7 font-global font-[18px] leading-[26px] md:max-w-[50%]">
            Global Reach, Local Support: Funding Your Trading Dreams Up to
            $300,000
          </div>

          <div className="cta-button hidden lg:block">
            <button class="py-3 px-7 text-[18px] leading-[24px] bg-btnColor text-white font-jakarta rounded-[10px] shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
              Get up to $300,000 funds 🙌
            </button>
          </div>

          <div className="facts-container mt-7 lg:mt-40 flex  md:flex-row gap-5 md:gap-7 justify-center lg:justify-start items-center">
            <div className="flex gap-4 flex-col md:flex-row md:gap-4 items-center">
              <div className="font-clash-display-medium text-[25px] leading-[30px] md:text-2xl md:leading-2xl">
                195+
              </div>
              <div className="font-jakarta text-[13px] leading-[20px] font-normal">
                Countries covered
              </div>
            </div>
            <div className="fact flex flex-col md:flex-row gap-4 items-center">
              <div className="font-clash-display-medium text-[25px] leading-[30px] md:text-2xl md:leading-2xl">
                $51M+
              </div>
              <div className="font-jakarta text-[13px] leading-[20px] font-normal">
                Total Payout
              </div>
            </div>
            <div className="fact flex flex-col md:flex-row gap-4 items-center">
              <div className="font-clash-display-medium text-[25px] leading-[30px] md:text-2xl md:leading-2xl">
                $51k+
              </div>
              <div className="font-jakarta text-[13px] leading-[20px] font-normal">
                Funded Traders
              </div>
            </div>
          </div>

          <div className="cta-button block lg:hidden mt-10 text-center">
            <button class="py-3 px-7 text-[18px] leading-[24px] bg-btnColor text-white font-jakarta rounded-[10px] shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
              Get up to $300,000 funds 🙌
            </button>
          </div>
        </div>
        <div className="right-column order-1 lg:order-2 w-[75%] md:w-[auto]">
          <div className="header-img relative z-10">
            <Image
              className="rounded-[21px]"
              src={HeaderImg}
              alt="Header Image"
              priority
            />
            <div className="intro-video-btn w-[100px] h-[100px]  md:w-[200px] md:h-[200px] bg-[url('/assets/img/play-btn.svg')] absolute top-[50%] left-[50%] -translate-x-[50%] md:transform-none -translate-y-[50%]  md:top-[40px] md:-left-[100px] bg-cover"></div>
            <div className="hidden md:flex video-tooltip gap-2 items-center absolute top-[70px] -right-20 bg-white shadow-custom-box-shadow text-[#292D34] font-clash-display-semibold px-2 py-4 rounded-[10px]">
              <span className="flex items-center justify-center rounded-[50%] p-4 bg-circle-gradient w-[15px] h-[15px]">
                🤘
              </span>
              Brand Promoter
            </div>
          </div>
        </div>
      </div>
      {/* <Widget /> */}
    </>
  );
};
