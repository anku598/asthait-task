import Image from "next/image";
import StatsImage from "/public/assets/img/stats-image.png";
export const StatsSection = () => {
  return (
    <div className="bg-[#fff] min-h-[50vh] relative grid-section-cotainer w-full flex flex-col  md:flex-row justify-between items-center gap-10 px-10 py-10 md:px-40 md:py-40">
      <div className="left-column order-2 md:order-1 flex-1">
        <div className="title text-primary font-clash-display-semibold text-[24px] leading-[30px] md:text-3xl md:leading-3xl mb-3">
          Introducing FundedNext Stellar Challenge 🙌
        </div>
        <ul className="mt-5 font-jakarta font-[20px] text-[#686885]">
          <li className="mb-3 custom-list-icon">
            <div className="pl-3">No Time Limit</div>
          </li>
          <li className="mb-3 custom-list-icon">
            <div className="pl-3">Balance Based Drawdown</div>
          </li>
          <li className="custom-list-icon">
            <div className="pl-3">15% Profit Share from Challenge Phase</div>
          </li>
        </ul>

        <button className="mt-5 py-3 px-7 text-[18px] leading-[24px] bg-btnColor text-white font-jakarta rounded-[10px] shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
          Learn More
        </button>
      </div>
      <div className="right-column order-1 md:order-2 flex-1">
        <Image src={StatsImage} alt="" />
      </div>
    </div>
  );
};
